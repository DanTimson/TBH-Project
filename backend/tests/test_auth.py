# tests/test_auth.py  
from fastapi.testclient import TestClient  

def test_login(client: TestClient):  
    response = client.post("/auth/login", json={  
        "email": "test@example.com",  
        "password": "secret"  
    })  
    assert response.status_code == 200  
    assert "access_token" in response.json()  