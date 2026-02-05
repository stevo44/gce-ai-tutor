from pydantic import BaseModel
from typing import List, Optional

class GenerateRequest(BaseModel):
    prompt: str
    max_tokens: int = 100
    temperature: float = 0.7

class GenerateResponse(BaseModel):
    text: str
    model_name: str
