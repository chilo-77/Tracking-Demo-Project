import React, { useState } from "react";
import DisplayDoc from "./props/displayDoc";
import "./css/documentReq.css";

function DocumentRequirement() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [docReq, setDocReq] = useState("");

  const docRequest = async () => {
    const doc = await fetch(
      `http://localhost:3000/documents/documentationReq?origin=${origin}&destination=${destination}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await doc.json();
    return setDocReq(data);
  };

  console.log(origin, destination);
  console.log(docReq);

  return (
    <div className="document-req-page">
      <div className="top-bar">
        <h2>Check Required Documents</h2>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Origin..."
          className="input-box"
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Destination..."
          className="input-box"
          onChange={(e) => setDestination(e.target.value)}
        />
        <button className="search-button" onClick={docRequest}>
          🔍 Check
        </button>
      </div>

      <div className="results">
        {docReq && <DisplayDoc />}
        <p>Enter origin and destination to see required documents.</p>
      </div>
    </div>
  );
}

export default DocumentRequirement;
