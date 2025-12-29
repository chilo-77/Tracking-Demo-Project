const Party = require("./../schema/partySchema");
const tempPartyDetail = require("./../data/partyDoc.json");

exports.getParty = async (req, res, next) => {
  // const party = await Party.find();
  const party = tempPartyDetail;

  if (!party.length) {
    return res.status(400).json({ message: "No Data" });
  }

  res.status(200).json({
    message: "Below are all party",
    party,
  });
};

exports.createParty = async (req, res, next) => {
  const { name, contact, email, address } = req.body;

  const party = await Party.create({ name, contact, email, address });

  res.status(200).json({
    message: "Below is the party",
    party,
  });
};
