const express = require("express");
const app = express();
const cors = require("cors");

const documents = require("../routes/documentRoute");
const partyRoutes = require("../routes/partyRoute");
const packageRoutes = require("../routes/packageRoute");
const awbRoutes = require("../routes/awbRoute");
const aiVerificationRoutes = require("../routes/aiVerificationRoute");
const pickupRoutes = require("../routes/pickupRoute");
const errorHandler = require("../errorHandler");

app.use(cors());
app.use(express.json());

app.use("/documents", documents);
app.use("/party", partyRoutes);
app.use("/package", packageRoutes);
app.use("/awb", awbRoutes);
app.use("/verification", aiVerificationRoutes);
app.use("/pickup", pickupRoutes);

app.get("/", (req, res) => {
  res.send("Backend is live!");
});

app.use(errorHandler);

module.exports = app;
module.exports.handler = serverless(app);
