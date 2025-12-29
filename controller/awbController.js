const Awb = require("./../schema/awbSchema");
const tempAwbDetail = require("./../data/awbDoc.json");

exports.getAwb = async (req, res, next) => {
  //   const data = await Awb.find();
  const data = tempAwbDetail;

  if (!data) {
    return res.status(404).json({
      status: res.status,
      message: "No AWB data found",
    });
  }

  res.status(200).json({
    message: "Below are the AWB data",
    data,
  });
};
