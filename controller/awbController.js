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

exports.generateAWB = async (req, res, next) => {
  const data = req.body;

  const generateTrackingNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const awbGeneration = {
    trackingNo: generateTrackingNumber(),
    service: data.service,
    status: "CREATED",
    createdAt: new Date(),
    updatedAt: new Date(),
    shipper: data[0],
    receiver: data[1],
    packages: data[2],
  };

  res.status(200).json({
    message: "AWB Generated",
    awbGeneration,
  });
};
