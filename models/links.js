import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  long_url: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
}, { timestamps: true });

let Link = mongoose.models.Link || mongoose.model("Link", linkSchema);

export default Link;