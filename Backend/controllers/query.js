const mongoose = require("mongoose");
const Query = require("../models/query");

module.exports.getQueryController = async (req, res) => {
  const data = await Query.find({}).sort({ createdAt: -1 });
  res.send(data);
};

module.exports.getQueryByIdController = async (req, res) => {
  let { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID ");
  }
  const data = await Query.findByIdAndUpdate(
    id,
    { read: true },
    { runValidators: true, new: true }
  );
  if (!data) {
    return res.status(404).send("Query not found");
  }
  res.send(data);
};

module.exports.addQueryController = async (req, res) => {
  await Query.insertMany([req.body]);
  res.send("Query add Successfull");
};

module.exports.deleteAllQueryController = async (req, res) => {
  await Query.deleteMany({});
  res.send("clear inbox successfull");
};

module.exports.deleteOneController = async (req, res) => {
  let { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID");
  }
  await Query.findByIdAndDelete(id);
  res.send("delete done");
};
