import os
import sys

# Try importing llama-cpp-python, handle missing dependency gracefully
try:
    from llama_cpp import Llama
    HAS_LLAMA_CPP = True
except ImportError:
    HAS_LLAMA_CPP = False
    print("[-] Warning: llama-cpp-python not found. Install it to run the LLM.")

class ModelWrapper:
    def __init__(self, model_path=None, n_gpu_layers=0, n_ctx=2048):
        """
        Initialize the Llama model.
        
        Args:
            model_path: Path to the GGUF model file.
            n_gpu_layers: Number of layers to offload to GPU (set to -1 for all).
            n_ctx: Context window size.
        """
        self.model = None
        self.model_name = "mistral-7b-quantized"
        
        if not HAS_LLAMA_CPP:
            print("[-] Error: cannot initialize model without llama-cpp-python.")
            return

        # Default model path if not provided
        if model_path is None:
            # Look for models in data/models directory
            base_dir = os.path.dirname(os.path.abspath(__file__))
            data_dir = os.path.join(base_dir, "data", "models")
            
            # Find the first .gguf file in the directory
            if os.path.exists(data_dir):
                files = [f for f in os.listdir(data_dir) if f.endswith(".gguf")]
                if files:
                    model_path = os.path.join(data_dir, files[0])
                    print(f"[+] Found model: {files[0]}")
                else:
                    print(f"[-] No .gguf models found in {data_dir}")
            else:
                 print(f"[-] Model directory not found: {data_dir}")

        if model_path and os.path.exists(model_path):
            print(f"Loading model from {model_path}...")
            try:
                self.model = Llama(
                    model_path=model_path,
                    n_gpu_layers=n_gpu_layers,
                    n_ctx=n_ctx,
                    verbose=True
                )
                print("[+] Model loaded successfully.")
            except Exception as e:
                print(f"[-] Failed to load model: {e}")
        else:
            print("[-] Model path invalid or not provided. running in Dummy mode.")

    def generate(self, prompt, max_tokens=256, temperature=0.7, stop=None, echo=False, stream=False):
        if self.model:
            return self.model(
                prompt,
                max_tokens=max_tokens,
                temperature=temperature,
                stop=stop or [],
                echo=echo,
                stream=stream
            )
        else:
            return {"choices": [{"text": "[Dummy Response] Model not loaded."}]}

_model_instance = None

def get_model():
    global _model_instance
    if _model_instance is None:
        # Check for environment variables for configuration
        model_path = os.getenv("LLM_MODEL_PATH")
        n_gpu_layers = int(os.getenv("n_gpu_layers", "0"))
        _model_instance = ModelWrapper(model_path=model_path, n_gpu_layers=n_gpu_layers)
    return _model_instance
