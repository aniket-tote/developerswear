import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  const uri = `mongodb+srv://admin:${process.env.PASS}@developerswearcluster.xzmyhys.mongodb.net/DevelopersWear?retryWrites=true&w=majority`;
  await mongoose.connect(uri);
  return handler(req, res);
};

export default connectDb;
