# Project Structure and Dependencies

## Project Tree

```
gce-ai-tutor/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   └── ask.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   └── schemas.py
│   │   ├── rag/
│   │   │   ├── __init__.py
│   │   │   ├── index.py
│   │   │   ├── loader.py
│   │   │   └── query.py
│   │   ├── __init__.py
│   │   └── main.py
│   ├── data/
│   │   └── README.txt
│   └── requirements.txt
└── frontend/
    └── README.md
```

## Dependencies

### Backend (Python)
Source: `backend/requirements.txt`

- fastapi
- uvicorn
- pydantic

### Frontend
No dependency file (e.g., package.json) found in `frontend/`.
