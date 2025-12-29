const express = require("express");
const router = express.Router();
// const Package = require("./../schema/packageSchema");
const packageController = require("./../controller/packageController");

router.get("/packageDetails", packageController.getPackageDetails);

module.exports = router;
