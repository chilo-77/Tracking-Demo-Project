import React from "react";
import MainPage from "./mainPage";
import TrackAWB from "./trackAWb";
import DocumentRequirement from "./documentReq";
import SubmitDocuments from "./submitDocs";
import { useState } from "react";

function HomePage() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="main-page">
      <h1>Shipment Dashboard</h1>
      {activePage === "dashboard" && <MainPage setActivePage={setActivePage} />}

      {activePage === "track" && <TrackAWB setActivePage={setActivePage} />}

      {activePage === "docs" && (
        <DocumentRequirement setActivePage={setActivePage} />
      )}
      {activePage === "submit" && (
        <SubmitDocuments setActivePage={setActivePage} />
      )}

      {activePage !== "dashboard" && (
        <button onClick={() => setActivePage("dashboard")}>Back</button>
      )}
    </div>
  );
}

export default HomePage;
