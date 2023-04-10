import Razorpay from "razorpay";

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      var options = {
        amount: req.body.subTotal, // amount in the smallest currency unit
        currency: "INR",
      };
      const response = await instance.orders.create(options);
      res.status(200).json({ success: true, order: response });
    } catch (e) {
      res.status(400).json({ success: false, message: e.message });
    }
  } else {
    res
      .status(400)
      .json({ success: false, message: "This method is not allowed" });
  }
}
