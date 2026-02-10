"""
RAG Query API endpoint.
Provides semantic search over document chunks.
"""

from fastapi import APIRouter, HTTPException
from schemas import RAGQueryRequest, RAGQueryResponse, RAGChunk, RAGGenerateRequest, RAGGenerateResponse
from retrieval.faiss_search import search, get_index_stats

router = APIRouter(prefix="/rag", tags=["RAG"])


@router.post("/query", response_model=RAGQueryResponse)
async def query_documents(request: RAGQueryRequest):
    """
    Search for relevant document chunks based on a query.
    
    Args:
        request: Query request with query text, optional topic filter, and top_k
        
    Returns:
        RAG query response with relevant chunks
    """
    try:
        results = search(
            query=request.query,
            top_k=request.top_k,
            topic_filter=request.topic
        )
        
        chunks = [RAGChunk(**result) for result in results]
        
        return RAGQueryResponse(
            query=request.query,
            chunks=chunks,
            count=len(chunks)
        )
    except RuntimeError as e:
        raise HTTPException(status_code=503, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Search failed: {str(e)}")


@router.post("/generate", response_model=RAGGenerateResponse)
async def generate_answer(request: RAGGenerateRequest):
    """
    Generate an answer to a question using RAG.
    Retrieves relevant chunks and uses Mistral 7B to generate a response.
    """
    from fastapi.responses import StreamingResponse
    from generation import generate_response, generate_response_stream
    
    # 1. Retrieve context
    try:
        results = search(
            query=request.question,
            top_k=request.top_k,
            topic_filter=request.topic
        )
        chunks = [RAGChunk(**result) for result in results]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Retrieval failed: {str(e)}")

    if not chunks:
        context_str = "No relevant notes found."
    else:
        context_str = "\n\n".join([f"Note {i+1}: {c.text}" for i, c in enumerate(chunks)])

    # 2. Generate response
    if request.stream:
        return StreamingResponse(
            generate_response_stream(
                question=request.question,
                context=context_str,
                max_tokens=request.max_tokens,
                temperature=request.temperature
            ),
            media_type="text/event-stream"
        )
    else:
        answer = generate_response(
            question=request.question,
            context=context_str,
            max_tokens=request.max_tokens,
            temperature=request.temperature
        )
        
        return RAGGenerateResponse(
            question=request.question,
            answer=answer,
            context=chunks
        )


@router.get("/stats")
async def get_stats():
    """
    Get statistics about the RAG index.
    
    Returns:
        Index statistics including chunk counts and topic distribution
    """
    return get_index_stats()
