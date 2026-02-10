from typing import List, Optional, Generator
from model_loader import get_model

# Mistral instruction format
# <s>[INST] {system_prompt} \n Context: {context} \n Question: {question} [/INST]

SYSTEM_PROMPT = """You are an expert Chemistry tutor for GCE O-Level students. 
Answer the question based ONLY on the provided context. 
If the context does not contain the answer, say "I cannot answer this based on the provided notes."
Do not halluncinate instructions or facts not present in the context.
Keep your answer concise and easy to understand."""

from config import settings

def format_prompt(question: str, context: str) -> str:
    """
    Formats the prompt based on the configured template.
    """
    format_type = settings.PROMPT_FORMAT.lower()
    
    if format_type == "chatml":
        # ChatML format (used by SmolLM2, Qwen, etc.)
        # <|im_start|>system\n{system}<|im_end|>\n<|im_start|>user\n{user}<|im_end|>\n<|im_start|>assistant\n
        return (
            f"<|im_start|>system\n{SYSTEM_PROMPT}<|im_end|>\n"
            f"<|im_start|>user\nContext:\n{context}\n\nQuestion: {question}<|im_end|>\n"
            f"<|im_start|>assistant\n"
        )
    else:
        # Default to Mistral format
        # <s>[INST] {system} \n Context: {context} \n Question: {question} [/INST]
        return f"<s>[INST] {SYSTEM_PROMPT}\n\nContext:\n{context}\n\nQuestion: {question} [/INST]"

def generate_response(
    question: str, 
    context: str, 
    max_tokens: int = 512, 
    temperature: int = 0.7
) -> str:
    """
    Generates a response from the LLM.
    """
    model = get_model()
    prompt = format_prompt(question, context)
    
    # Non-streaming generation
    output = model.generate(
        prompt,
        max_tokens=max_tokens,
        temperature=temperature,
        stop=["</s>", "[/INST]"],
        echo=False,
        stream=False
    )
    
    # Extract text from response
    try:
        if isinstance(output, dict):
             return output["choices"][0]["text"].strip()
        else:
             return str(output)
    except (KeyError, IndexError):
        return "Error generating response."

def generate_response_stream(
    question: str, 
    context: str, 
    max_tokens: int = 512, 
    temperature: int = 0.7
) -> Generator[str, None, None]:
    """
    Generates a streaming response from the LLM.
    """
    model = get_model()
    prompt = format_prompt(question, context)
    
    stream = model.generate(
        prompt,
        max_tokens=max_tokens,
        temperature=temperature,
        stop=["</s>", "[/INST]"],
        echo=False,
        stream=True
    )
    
    for chunk in stream:
        try:
             text = chunk["choices"][0]["text"]
             yield text
        except (KeyError, IndexError):
             continue
