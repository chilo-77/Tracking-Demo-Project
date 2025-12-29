import React, { useState } from "react";
import "./css/submitDocuments.css";

function SubmitDocuments() {
  const [awb, setAwb] = useState("");
  const [docsReq, setDocsReq] = useState("");
  const [files, setFiles] = useState("");
  const [status, setStatus] = useState("");
  console.log(files);

  console.log(docsReq);

  const getAwb = async (awb) => {
    const data = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/awb/getAWB`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await data.json();
    const res1 = res.data;

    const trueAwb = res1.find(() => awb);

    console.log(trueAwb);

    const docsReq = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/documents/documentationReq?origin=India&destination=UAE`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const docs = await docsReq.json();
    const trueDocs = docs.documents;

    const docSheet = trueDocs.map((d) => {
      return d.name;
    });

    setDocsReq(docSheet);

    return;
  };

  const verifyDocs = async () => {
    if (!files || files.length === 0) {
      alert("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", files[0]);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/verification/verify`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
        alert(errorData.error || "Error uploading PDF");
        return;
      }

      const data = await response.json();
      console.log(data);
      setStatus(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while uploading the PDF.");
    }
  };

  return (
    <div className="submit-docs-page">
      <div className="top-bar">
        <h2>Submit Documents / Ready for Pickup</h2>
      </div>

      <div className="content">
        <div className="left-column">
          <label>
            AWB Number:
            <input
              type="text"
              placeholder="Enter AWB number"
              onChange={(e) => {
                setAwb(e.target.value);
              }}
            />
          </label>
          <button
            className="awb-submit-button"
            onClick={() => {
              getAwb(awb);
            }}
          >
            🔍
          </button>
        </div>

        <div className="right-column">
          <h3>Required Documents</h3>
          <p>Documents will appear here based on AWB.</p>

          <div className="docs-box">
            <h4>Documents Required</h4>
            {!docsReq && (
              <p className="docs-placeholder">
                Documents will appear here based on AWB.
              </p>
            )}
            {docsReq && (
              <ul className="docs-list">
                <li>{docsReq[0]}</li>
                <li>{docsReq[1]}</li>
                <li>{docsReq[2]}</li>
              </ul>
            )}
          </div>

          <label>
            Upload Documents:
            <input
              type="file"
              multiple
              onChange={(e) => {
                setFiles(e.target.files);
                console.log(e.target.files);
              }}
            />
          </label>

          <button className="submit-button" onClick={() => verifyDocs()}>
            Submit / Mark Ready
          </button>
          {status && <div className="review-box">Review Pending</div>}
        </div>
      </div>
    </div>
  );
}

export default SubmitDocuments;
