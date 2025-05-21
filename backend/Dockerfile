# Stage 1: Build  
FROM python:3.10-slim as builder  

WORKDIR /app  
COPY requirements.txt .  
RUN pip install --user --no-cache-dir -r requirements.txt  

# Stage 2: Runtime  
FROM python:3.10-slim  
WORKDIR /app  

COPY --from=builder /root/.local /root/.local
COPY ./app ./app

ENV LANG ru_RU.UTF-8
ENV LANGUAGE ru_RU:ru
ENV LC_ALL ru_RU.UTF-8
ENV PATH=/root/.local/bin:$PATH

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
