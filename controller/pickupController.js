exports.schedulePickup = async (req, res, next) => {
  const { awb, date, timeWindow } = req.body;

  const id = (
    awb.shipper.address.city.slice(0, 3) +
    Math.floor(100 + Math.random() * 900).toString()
  ).trim();

  const pickup = {
    awb: awb.trackingNo,
    id: id,
    pickupAddress: {
      city: awb.shipper.address.city,
      pincode: awb.shipper.address.postalCode,
      country: awb.shipper.address.country,
    },
    shipmentDetails: {
      numberOfPackages: awb.packages[0].quantity,
      weight: `${awb.packages[0].weight.value} ${awb.packages[0].weight.unit}`,
    },
    pickupTime: {
      date: date,
      timeWindow: {
        from: timeWindow.from,
        to: timeWindow.to,
      },
    },
    contactPerson: {
      name: awb.shipper.name,
      phone: awb.shipper.contact,
    },
  };

  res.status(200).json({
    message: "Pickup has been successfully scheduled",
    pickup,
  });
};
