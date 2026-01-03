function MainPage({ setActivePage }) {
  return (
    <div className="options">
      <div
        className="option-card"
        onClick={() => {
          setActivePage("generateawb");
        }}
      >
        <h2>Generate AWB</h2>
        <p>Generate new AWB and send demo email</p>
      </div>

      <div
        className="option-card"
        onClick={() => {
          setActivePage("track");
        }}
      >
        <h2>Get AWB</h2>
        <p>Get your shipment details using AWB number</p>
      </div>

      <div
        className="option-card"
        onClick={() => {
          setActivePage("docs");
        }}
      >
        <h2>Document Requirmentation</h2>
        <p>Check required documents for shipment</p>
      </div>

      <div
        className="option-card"
        onClick={() => {
          setActivePage("submit");
        }}
      >
        <h2>Submit Documents / Ready for Pickup</h2>
        <p>Upload documents and mark shipment ready</p>
      </div>
    </div>
  );
}

export default MainPage;
