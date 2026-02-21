# Carbon Footprint Calculator

A full-stack Carbon Footprint Calculator built with FastAPI, React, and MongoDB. This application calculates carbon emissions based on transportation and electricity usage and stores the results in a database. It demonstrates modern full-stack development with a scalable backend, responsive frontend, and persistent data storage.

---

## Features

- Calculate carbon emissions in real time
- FastAPI REST API backend
- React frontend with modern UI
- MongoDB database integration
- Persistent storage of calculation results
- Full-stack architecture
- Clean and professional project structure

---

## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Axios
- TailwindCSS

### Backend
- FastAPI
- Python
- Uvicorn
- Pydantic

### Database
- MongoDB
- PyMongo

---

## Project Structure


carbon-footprint-calculator/
│
├── backend/
│ ├── main.py
│ ├── database.py
│ ├── models.py
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
│
├── .gitignore
└── README.md


---

## How It Works

1. User enters transport distance and electricity usage
2. React frontend sends POST request to FastAPI backend
3. FastAPI calculates carbon emissions
4. Result is stored in MongoDB
5. Result is returned and displayed on frontend

Architecture:


React → FastAPI → MongoDB


---

## API Endpoint

### POST /calculate

Request:


{
"transport_km": 20,
"electricity_kwh": 100
}


Response:


{
"id": "uuid",
"transport": 3.84,
"electricity": 47.5,
"total": 51.34
}


---

## Installation

### Clone repository


git clone https://github.com/Danieljacobj/carbon-footprint-calculator.git

cd carbon-footprint-calculator


---

### Backend Setup


cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload


Backend runs on:


http://127.0.0.1:8000


---

### Frontend Setup

Open new terminal:


cd frontend
npm install
npm run dev


Frontend runs on:


http://localhost:5173


---

### Database Setup

Install MongoDB Compass or MongoDB Atlas.

Database and collection will be created automatically:


Database: carbonDB
Collection: footprints


---

## Future Improvements

- Emission history dashboard
- Data visualization charts
- User authentication
- Cloud deployment
- Real emission factor API integration

---

## Author

Daniel Jacob

GitHub:  
https://github.com/Danieljacobj

---

## License
