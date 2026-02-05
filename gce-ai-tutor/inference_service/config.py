import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "Inference Service"
    MODEL_PATH: str = os.getenv("MODEL_PATH", "./models")

    class Config:
        env_file = ".env"

settings = Settings()
