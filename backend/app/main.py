from fastapi import FastAPI, HTTPException  
from fastapi.exceptions import RequestValidationError  
from app import models
from app.database import engine
from app.routers import auth

# Create tables (remove this in production; use Alembic instead)
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Travel Platform API", version="0.1.0")
app.include_router(auth.router)

@app.get("/")
async def root():
    return {"message": "API is running"}

@app.exception_handler(HTTPException)  
async def http_exception_handler(request, exc):  
    return JSONResponse(  
        status_code=exc.status_code,  
        content={"detail": exc.detail},  
    ) 

@app.exception_handler(RequestValidationError)  
async def validation_exception_handler(request, exc):  
    return JSONResponse(  
        status_code=422,  
        content={"detail": exc.errors()},  
    )  