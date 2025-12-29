const express = require("express");
const router = express.Router();
const AWB = require("../schema/awbSchema");
const Package = require("../schema/packageSchema");
const documentController = require("./../controller/documentController");

router.get("/documentationReq", documentController.getDocument);

module.exports = router;
