exports.getDocument = (req, res, next) => {
  const { awb } = req.body;

  const ori = String(awb.shipper.address.country).toLowerCase().trim();
  const des = String(awb.receiver.address.country).toLowerCase().trim();

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
      message: "Below are the documents required for India to UAE shipment ",
      documents: exampleDocuments,
    });
  }

  if (ori === "uae" && des === "india") {
    const exampleDocuments = [
      {
        name: "Commercial Invoice",
        description: "Invoice issued by shipper with value, HS code, currency",
      },
      {
        name: "Packing List",
        description: "Package-wise details of shipment",
      },
      {
        name: "Air Waybill (AWB)",
        description: "Transport document for the shipment",
      },
      {
        name: "IEC (Importer Exporter Code)",
        description: "Mandatory for Indian importer",
      },
      {
        name: "KYC Documents",
        description: "PAN, Aadhaar/Passport of importer",
      },
      {
        name: "Country of Origin Certificate (if applicable)",
        description: "Required only if duty benefit or restricted goods",
      },
    ];

    return res.status(200).json({
      message: "Below are the documents required for UAE to India shipment",
      documents: exampleDocuments,
    });
  }

  return res.status(200).json({
    message: "No example documents available for this route",
    documents: [],
  });
};
