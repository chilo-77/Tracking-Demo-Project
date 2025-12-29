const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  trackingNo: { type: String, required: true, length: 12 },
  service: { type: String, required: true },
  shipper: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "PartySchema",
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "PartySchema",
  },
  status: {
    type: String,
    default: "Created",
    enum: ["Created", "In Transit", "Delivered"],
  },
});

const AWBSchema = mongoose.model("AWB", schema);

module.exports = AWBSchema;
