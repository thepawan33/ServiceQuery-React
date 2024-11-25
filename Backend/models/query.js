const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  contact: {
    type: Number,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "720h",
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const Query = mongoose.model("Query", querySchema);

module.exports = Query;
