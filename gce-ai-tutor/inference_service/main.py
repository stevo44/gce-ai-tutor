from fastapi import FastAPI, HTTPException
from schemas import GenerateRequest, GenerateResponse
from generation import generate_text

app = FastAPI(title="AI Tutor Inference Service")

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "inference_service"}

@app.post("/generate", response_model=GenerateResponse)
def generate(request: GenerateRequest):
    try:
        result = generate_text(
            prompt=request.prompt,
            max_tokens=request.max_tokens,
            temperature=request.temperature
        )
        return GenerateResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
