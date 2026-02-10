"""
Embedding generation module.
Converts text into vector embeddings using a sentence transformer model.
"""

from typing import List
import numpy as np
from sentence_transformers import SentenceTransformer


# Global model instance (loaded once)
_embedding_model = None


def load_embedding_model(model_name: str = "all-MiniLM-L6-v2") -> SentenceTransformer:
    """
    Load the sentence transformer embedding model.
    Uses caching to avoid reloading.
    
    Args:
        model_name: Name of the sentence-transformers model
        
    Returns:
        SentenceTransformer model instance
    """
    global _embedding_model
    
    if _embedding_model is None:
        print(f"Loading embedding model: {model_name}...")
        _embedding_model = SentenceTransformer(model_name)
        print(f"Model loaded successfully. Embedding dimension: {_embedding_model.get_sentence_embedding_dimension()}")
    
    return _embedding_model


def encode_texts(texts: List[str], show_progress: bool = True) -> np.ndarray:
    """
    Encode multiple texts into embeddings.
    
    Args:
        texts: List of text strings to encode
        show_progress: Whether to show progress bar
        
    Returns:
        NumPy array of embeddings with shape (len(texts), embedding_dim)
    """
    model = load_embedding_model()
    embeddings = model.encode(texts, show_progress_bar=show_progress)
    return np.array(embeddings, dtype='float32')


def encode_query(query: str) -> np.ndarray:
    """
    Encode a single query string into an embedding.
    
    Args:
        query: Query text to encode
        
    Returns:
        NumPy array with shape (1, embedding_dim)
    """
    model = load_embedding_model()
    embedding = model.encode([query], show_progress_bar=False)
    return np.array(embedding, dtype='float32')
