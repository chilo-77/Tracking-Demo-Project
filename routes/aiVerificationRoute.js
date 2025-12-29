const express = require("express");
const router = express.Router();

const upload = require("./../controller/middleware/multer");
const aiVerificationController = require("./../controller/aiVerificationController");

router.post(
  "/verify",
  upload.single("pdf"),
  aiVerificationController.getVerification
);

module.exports = router;
