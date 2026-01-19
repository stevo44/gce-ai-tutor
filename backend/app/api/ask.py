from fastapi import APIRouter
from app.models.schemas import AskRequest, AskResponse

router = APIRouter()

@router.post("/ask", response_model=AskResponse)
async def ask_question(request: AskRequest):
    return {"answer": f"Echo: {request.question}"}
