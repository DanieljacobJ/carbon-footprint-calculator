from pydantic import BaseModel

class FootprintInput(BaseModel):
    transport_km: float
    electricity_kwh: float