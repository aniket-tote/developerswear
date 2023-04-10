import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
import { useEffect } from "react";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {

  if (req.method == "POST") {
    try {
      let user = await User.findOne({ email: req.body.email });
      const userPass = CryptoJS.AES.decrypt(
        user.password,
        "mySecretKey"
      ).toString(CryptoJS.enc.Utf8);
      if (user != null && req.body.password === userPass) {
        var token = jwt.sign({ user }, "jwtsecret");
        res.status(200).json({ success: true, name: user.name, token });
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
