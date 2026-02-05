# GCE AI Tutor Platform

## Structure
- **backend/**: Django (System of Record)
- **inference_service/**: FastAPI (AI/LLM Logic)
- **frontend/**: React + Tailwind CSS
- **data/**: Data storage (FAISS, Syllabus, etc.)

## Startup Instructions

### Prerequisites
- Python 3.10+
- Node.js 18+
- PostgreSQL
- Docker (Optional)

### 1. Backend (Django)
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2. Inference Service (FastAPI)
```bash
cd inference_service
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
```

### 3. Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

### Docker
```bash
docker-compose up --build
```
