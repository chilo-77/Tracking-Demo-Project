import React from "react";
import { useState } from "react";
import DisplayAWB from "./props/displayAWB";
import "./css/trackAWB.css";

function TrackAWB() {
  const [AWB, setTrackingNo] = useState("");
  const [AWBData, setAWBData] = useState("");

  const getAWB = async function () {
    const req = await fetch(`${process.env.REACT_APP_BACKEND_URL}/awb/getAWB`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const reqJson = await req.json();

    let data = reqJson.data.find((e) => {
      return e.trackingNo === AWB;
    });

    return setAWBData(data);
  };

  return (
    <div className="track-awb-page">
      <div className="top-bar">
        <h2>Get Your AWB</h2>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter AWB number..."
          className="search-input"
          onChange={(e) => setTrackingNo(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            getAWB();
          }}
        >
          🔍
        </button>
      </div>

      <div className="results">
        {AWBData && <DisplayAWB data={AWBData} />}
        <p>Search for your AWB to see shipment details.</p>
      </div>
    </div>
  );
}

export default TrackAWB;
