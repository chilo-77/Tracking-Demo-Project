const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    awbId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AWB",
      required: true,
      index: true,
    },

    packageNumber: {
      type: String,
      required: true,
    },

    weight: {
      value: { type: Number, required: true },
      unit: { type: String, enum: ["kg", "lb"], default: "kg" },
    },

    dimensions: {
      length: { type: Number, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
      unit: { type: String, enum: ["cm", "inch"], default: "cm" },
    },

    quantity: {
      type: Number,
      default: 1,
    },

    description: {
      type: String,
    },

    declaredValue: {
      amount: { type: Number },
      currency: { type: String },
    },

    status: {
      type: String,
      enum: ["CREATED", "IN_TRANSIT", "DELIVERED"],
      default: "CREATED",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Package", packageSchema);
