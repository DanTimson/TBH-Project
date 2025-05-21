```
TBH-PROJECT/
├── public/
├── .env
├── .gitignore
├── LICENSE
├── openapi.yaml
├── docker-compose.yml
├── postgres/
    ├── Dockerfile
    └── init
        ├── 01_init.sql
        └── 02_sample_data.sql
├── backend/
    ├── Dockerfile
    ├── requirements.txt
    └── app/
        ├── __init__.py
        ├── main.py
        └── routers/            
            ├── __init__.py
            ├── hotels.py
            ├── search.py
            └── bookings.py
└── frontend/
    ├── Dockerfile
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    ├── main.jsx
    ├── assets/
    ├── components/
    ├── lib/
    ├── pages/
    ├── services/
    └── styles/
        └── tailwind.css
             
```