const express = require("express");
const router = express.Router();
const pickupController = require("./../controller/pickupController");

router.post("/schedulePickup", pickupController.schedulePickup);

module.exports = router;
