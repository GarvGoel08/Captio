import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      code: {
        type: String,
      },
      expiration: {
        type: Date,
      },
    },
  },
  { timestamps: true }
);

let User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
