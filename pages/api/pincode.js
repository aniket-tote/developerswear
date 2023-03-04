export default function handler(req, res) {
  const pincodes = [431513, 445002, 445405];
  if (pincodes.includes(parseInt(req.body.pincode))) {
    res.status(200).json({ status: true, message: "available" });
  } else {
    res
      .status(200)
      .json({ status: false, message: "No dealer ships to this pincode" });
  }
}
