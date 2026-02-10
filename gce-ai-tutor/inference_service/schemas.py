from pydantic import BaseModel, Field
from typing import List, Optional

class GenerateRequest(BaseModel):
    prompt: str
    max_tokens: int = 100
    temperature: float = 0.7

class GenerateResponse(BaseModel):
    text: str
    model_name: str


# RAG-specific schemas
class RAGQueryRequest(BaseModel):
    query: str = Field(..., description="Search query text")
    topic: Optional[str] = Field(None, description="Optional topic filter")
    top_k: int = Field(5, ge=1, le=20, description="Number of results to return")


class RAGChunk(BaseModel):
    chunk_id: int
    text: str
    topic: str
    distance: float
    relevance_score: float


class RAGQueryResponse(BaseModel):
    query: str
    chunks: List[RAGChunk]
    count: int

class RAGGenerateRequest(BaseModel):
    question: str = Field(..., description="User question")
    topic: Optional[str] = Field(None, description="Optional topic filter")
    top_k: int = Field(3, ge=1, le=10, description="Number of chunks to retrieve")
    max_tokens: int = Field(512, ge=1, le=4096)
    temperature: float = Field(0.7, ge=0.0, le=1.0)
    stream: bool = Field(False, description="Stream the response")

class RAGGenerateResponse(BaseModel):
    question: str
    answer: str
    context: List[RAGChunk]
