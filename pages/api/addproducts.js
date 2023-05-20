import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      for (let i = 0; i < req.body.length; i++) {
        let slug;
        if (
          req.body[i].category === "tshirt" ||
          req.body[i].category === "hoodie"
        ) {
          slug =
            req.body[i].title.replace(/ /g, "-") +
            "-" +
            req.body[i].size +
            "-" +
            req.body[i].color;
        } else {
          slug = req.body[i].title.replace(/ /g, "-");
        }
        let p = new Product({
          title: req.body[i].title,
          slug: slug,
          desc: req.body[i].desc,
          img: req.body[i].img,
          category: req.body[i].category,
          size: req.body[i].size,
          color: req.body[i].color,
          price: req.body[i].price,
          availableQty: req.body[i].availableQty,
        });
        await p.save();
      }
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(500).json({ success: false, message: e.message });
    }
  } else {
    res
      .status(400)
      .json({ success: false, message: "This method is not allowed" });
  }
};

export default connectDb(handler);
