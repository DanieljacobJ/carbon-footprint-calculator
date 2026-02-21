import { useState } from "react";
import API from "./api";

export default function App() {

  const [transport, setTransport] = useState("");
  const [electricity, setElectricity] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async () => {

    try {

      const res = await API.post("/calculate", {
        transport_km: Number(transport),
        electricity_kwh: Number(electricity)
      });

      setResult(res.data);

    } catch {

      alert("Backend not running");

    }

  };

  return (

    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom right, #020617, #0f172a)"
    }}>

      <div style={{
        background: "rgba(255,255,255,0.1)",
        padding: "30px",
        borderRadius: "15px",
        width: "350px",
        color: "white"
      }}>

        <h2 style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#22c55e"
        }}>
          Carbon Footprint Calculator
        </h2>

        <input
          placeholder="Transport (km per day)"
          value={transport}
          onChange={(e)=>setTransport(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"10px",
            borderRadius:"8px",
            border:"none"
          }}
        />

        <input
          placeholder="Electricity (kWh per month)"
          value={electricity}
          onChange={(e)=>setElectricity(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"10px",
            borderRadius:"8px",
            border:"none"
          }}
        />

        <button
          onClick={calculate}
          style={{
            width:"100%",
            padding:"12px",
            background:"#22c55e",
            color:"white",
            border:"none",
            borderRadius:"8px",
            cursor:"pointer"
          }}
        >
          Calculate
        </button>

        {result && (

          <div style={{marginTop:"20px"}}>

            <p>Transport: {result.transport.toFixed(2)} kg CO₂</p>

            <p>Electricity: {result.electricity.toFixed(2)} kg CO₂</p>

            <p style={{fontWeight:"bold", color:"#22c55e"}}>
              Total: {result.total.toFixed(2)} kg CO₂
            </p>

          </div>

        )}

      </div>

    </div>

  );

}