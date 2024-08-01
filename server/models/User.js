import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // minLength: [3, 'Name must be at least 5 character'],
      // maxLength: [20, 'Name should be less than 20 character'],
      // lowercase: true,
      // trim: true
    },
    email: {
      type: String,
      required: true,
      // lowercase: true,
      // trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    //   minLength: [4, "Password must be at least 4 character"],
    //   select: false,
    },
    role: {
      type: String,
      default: "User",
    },
    subscription: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", schema);
