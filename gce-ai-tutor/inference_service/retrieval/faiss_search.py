"""
FAISS search functionality.
Performs similarity search to retrieve relevant document chunks for a given query.
"""

import numpy as np
import faiss
from typing import List, Dict, Any, Optional
from .embeddings import encode_query


# Global state for loaded index and metadata
_index: Optional[faiss.Index] = None
_chunk_data: Optional[List[Dict[str, Any]]] = None


def initialize_search(index: faiss.Index, chunk_data: List[Dict[str, Any]]) -> None:
    """
    Initialize the search module with a loaded index and chunk data.
    
    Args:
        index: Loaded FAISS index
        chunk_data: List of chunk metadata dictionaries
    """
    global _index, _chunk_data
    _index = index
    _chunk_data = chunk_data
    print(f"Search module initialized with {index.ntotal} vectors and {len(chunk_data)} chunks")


def search(
    query: str, 
    top_k: int = 5, 
    topic_filter: Optional[str] = None
) -> List[Dict[str, Any]]:
    """
    Search for relevant chunks based on a query.
    
    Args:
        query: Search query text
        top_k: Number of top results to return
        topic_filter: Optional topic name to filter results
        
    Returns:
        List of dictionaries containing chunk data and relevance scores
        
    Raises:
        RuntimeError: If search module not initialized
    """
    if _index is None or _chunk_data is None:
        raise RuntimeError("Search module not initialized. Call initialize_search() first.")
    
    # Encode query to embedding
    query_embedding = encode_query(query)
    
    # Determine how many results to fetch initially
    # Fetch more if topic filtering is needed
    fetch_count = top_k * 3 if topic_filter else top_k
    fetch_count = min(fetch_count, _index.ntotal)
    
    # Search FAISS index
    distances, indices = _index.search(query_embedding, fetch_count)
    
    # Build results
    results = []
    for idx, distance in zip(indices[0], distances[0]):
        if idx < len(_chunk_data):
            chunk = _chunk_data[idx]
            
            # Apply topic filter if specified
            if topic_filter and chunk.get("topic") != topic_filter:
                continue
            
            results.append({
                "chunk_id": chunk["chunk_id"],
                "text": chunk["text"],
                "topic": chunk["topic"],
                "distance": float(distance),
                "relevance_score": 1.0 / (1.0 + float(distance))  # Convert distance to similarity
            })
            
            # Stop once we have enough results
            if len(results) >= top_k:
                break
    
    return results


def get_index_stats() -> Dict[str, Any]:
    """
    Get statistics about the loaded index.
    
    Returns:
        Dictionary with index statistics
    """
    if _index is None or _chunk_data is None:
        return {"status": "not_initialized"}
    
    topic_counts = {}
    for chunk in _chunk_data:
        topic = chunk.get("topic", "Unknown")
        topic_counts[topic] = topic_counts.get(topic, 0) + 1
    
    return {
        "status": "initialized",
        "total_chunks": len(_chunk_data),
        "index_vectors": _index.ntotal,
        "embedding_dimension": _index.d,
        "topics": topic_counts
    }
