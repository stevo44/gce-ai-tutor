"""
FAISS index management module.
Handles loading, saving, and updating the FAISS vector index.
"""

import os
import json
import numpy as np
import faiss
from typing import List, Dict, Any, Optional
from pathlib import Path


def create_index(embeddings: np.ndarray) -> faiss.IndexFlatL2:
    """
    Create a FAISS index from embeddings using L2 distance.
    
    Args:
        embeddings: NumPy array of embeddings with shape (n_docs, embedding_dim)
        
    Returns:
        FAISS IndexFlatL2 instance
    """
    dimension = embeddings.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(embeddings)
    print(f"Created FAISS index with {index.ntotal} vectors of dimension {dimension}")
    return index


def save_index(
    index: faiss.Index, 
    chunk_data: List[Dict[str, Any]], 
    save_dir: str
) -> None:
    """
    Save FAISS index and associated chunk metadata to disk.
    
    Args:
        index: FAISS index to save
        chunk_data: List of chunk metadata dictionaries
        save_dir: Directory to save index and metadata
    """
    os.makedirs(save_dir, exist_ok=True)
    
    index_path = os.path.join(save_dir, "faiss_index.bin")
    metadata_path = os.path.join(save_dir, "chunk_metadata.json")
    
    # Save FAISS index
    faiss.write_index(index, index_path)
    print(f"Saved FAISS index to: {index_path}")
    
    # Save chunk metadata
    with open(metadata_path, 'w', encoding='utf-8') as f:
        json.dump(chunk_data, f, indent=2, ensure_ascii=False)
    print(f"Saved chunk metadata to: {metadata_path}")


def load_index(load_dir: str) -> tuple[faiss.Index, List[Dict[str, Any]]]:
    """
    Load FAISS index and chunk metadata from disk.
    
    Args:
        load_dir: Directory containing saved index and metadata
        
    Returns:
        Tuple of (FAISS index, chunk metadata list)
        
    Raises:
        FileNotFoundError: If index or metadata files don't exist
    """
    index_path = os.path.join(load_dir, "faiss_index.bin")
    metadata_path = os.path.join(load_dir, "chunk_metadata.json")
    
    if not os.path.exists(index_path):
        raise FileNotFoundError(f"FAISS index not found: {index_path}")
    if not os.path.exists(metadata_path):
        raise FileNotFoundError(f"Chunk metadata not found: {metadata_path}")
    
    # Load FAISS index
    index = faiss.read_index(index_path)
    print(f"Loaded FAISS index with {index.ntotal} vectors")
    
    # Load chunk metadata
    with open(metadata_path, 'r', encoding='utf-8') as f:
        chunk_data = json.load(f)
    print(f"Loaded {len(chunk_data)} chunk metadata entries")
    
    return index, chunk_data


def index_exists(index_dir: str) -> bool:
    """
    Check if a FAISS index exists in the specified directory.
    
    Args:
        index_dir: Directory to check
        
    Returns:
        True if index exists, False otherwise
    """
    index_path = os.path.join(index_dir, "faiss_index.bin")
    metadata_path = os.path.join(index_dir, "chunk_metadata.json")
    return os.path.exists(index_path) and os.path.exists(metadata_path)
