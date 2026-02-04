from fastapi import FastAPI
# from .rag.query import ... # Import RAG components as needed

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Inference Service Active"}

# Include routers for RAG/Inference here
