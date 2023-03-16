import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user != null && user.password == req.body.password) {
        res.status(200).json({ success: true, user });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Invalid Credentials" });
      }
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
