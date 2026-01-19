from fastapi import FastAPI
from app.api import ask

app = FastAPI(title="GCE AI Tutor")

app.include_router(ask.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to GCE AI Tutor API"}
