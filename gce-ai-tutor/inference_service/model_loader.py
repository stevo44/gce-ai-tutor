import os

# Placeholder for actual model loading logic.
# In production, this would load a model from 'model_path' via transformers or vllm.

class ModelWrapper:
    def __init__(self):
        print("Initializing dummy model wrapper...")
        self.model_name = "dummy-model-v1"

_model_instance = None

def get_model():
    global _model_instance
    if _model_instance is None:
        _model_instance = ModelWrapper()
    return _model_instance
