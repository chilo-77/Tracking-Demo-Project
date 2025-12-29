exports.getDocument = (req, res, next) => {
  const { origin, destination, commodity, numberOfPkg, weightPerPiece, value } =
    req.query;

  const ori = String(origin).toLowerCase().trim();
  const des = String(destination).toLowerCase().trim();

  if (ori === des) return next();

  if (ori == "india" && des == "uae") {
    const exampleDocuments = [
      { name: "Invoice", description: "Commercial invoice of the shipment" },
      { name: "Packing List", description: "Details of all packages" },
      {
        name: "Certificate of Origin",
        description: "Proof of shipment origin",
      },
      { name: "KYC", description: "Shipper verification document" },
    ];

    return res.status(200).json({
      message: "Below are the documents required",
      documents: exampleDocuments,
    });
  }

  return res.status(200).json({
    message: "No example documents available for this route",
    documents: [],
  });
};
