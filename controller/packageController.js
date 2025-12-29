const Package = require("./../schema/packageSchema");
const tempPackageDetails = require("./../data/packageDoc.json");

exports.getPackageDetails = async (req, res, next) => {
  //DB Data base
  //   const data = await Package.find();
  const data = tempPackageDetails;

  if (!data) {
    return res
      .status(404)
      .json({ status: res.status, message: "No package details were found" });
  }

  res.status(200).json({
    message: "Below is the package details",
    data,
  });
};
