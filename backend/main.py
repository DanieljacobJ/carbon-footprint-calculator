from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import FootprintInput
from database import collection
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TRANSPORT_FACTOR = 0.192
ELECTRICITY_FACTOR = 0.475

@app.get("/")
def root():
    return {"message": "API running"}

@app.post("/calculate")
def calculate(data: FootprintInput):

    transport = data.transport_km * TRANSPORT_FACTOR
    electricity = data.electricity_kwh * ELECTRICITY_FACTOR

    total = transport + electricity

    result = {
        "id": str(uuid.uuid4()),
        "transport": transport,
        "electricity": electricity,
        "total": total
    }

    collection.insert_one(result)

    return result