const express = require("express");
const router = express.Router();
const awbController = require("./../controller/awbController");

router.get("/getAWB", awbController.getAwb);

module.exports = router;
