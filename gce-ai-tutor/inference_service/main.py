"""
Main entry point for the AI Inference Service.
Initializes the FastAPI application and mounts all API routes.
"""

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.rag import router as rag_router
from retrieval.faiss_index import load_index, index_exists
from retrieval.faiss_search import initialize_search

# Initialize FastAPI app
app = FastAPI(
    title="GCE AI Tutor Inference Service",
    description="RAG-based inference service for GCE Chemistry tutoring",
    version="1.0.0"
)

# Configure CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routers
app.include_router(rag_router)


@app.on_event("startup")
async def startup_event():
    """
    Load FAISS index and initialize search on startup.
    """
    index_dir = os.path.join(os.path.dirname(__file__), "data", "faiss")
    
    if index_exists(index_dir):
        print("Loading FAISS index on startup...")
        try:
            index, chunk_data = load_index(index_dir)
            initialize_search(index, chunk_data)
            print("[+] RAG system initialized successfully")
        except Exception as e:
            print(f"[-] Warning: Failed to load FAISS index: {e}")
            print("  Run the ingestion script to create the index.")
    else:
        print("[-] No FAISS index found. Run the ingestion script first.")
        print(f"  Expected location: {index_dir}")


@app.get("/")
async def root():
    """Health check endpoint."""
    return {
        "service": "GCE AI Tutor Inference Service",
        "status": "running",
        "version": "1.0.0"
    }


@app.get("/health")
async def health_check():
    """Detailed health check."""
    from retrieval.faiss_search import get_index_stats
    stats = get_index_stats()
    return {
        "status": "healthy" if stats.get("status") == "initialized" else "degraded",
        "rag_index": stats
    }
