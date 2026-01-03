const express = require("express");
const router = express.Router();
const partyController = require("./../controller/partyController");

router
  .route("/party")
  .get(partyController.getParty)
  .post(partyController.createParty);

router.post("/sendEmail", partyController.informParty);

module.exports = router;
