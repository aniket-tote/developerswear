import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      let u = new User(req.body);
      await u.save();
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ success: false, message: e.message });
    }
  } else {
    res
      .status(400)
      .json({ success: false, message: "This method is not allowed" });
  }
};

export default connectDb(handler);
