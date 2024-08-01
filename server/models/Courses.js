import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    // minLength: [3, 'Name must be at least 5 character'],
    // maxLength: [20, 'Name should be less than 20 character'],
    // lowercase: true,
    // trim: true
  },
  description: {
    type: String,
    required: true,
    // lowercase: true,
    // trim: true,
    //   unique: true,
  },
  image: {
    type: String,
    required: true,
    //   minLength: [4, "Password must be at least 4 character"],
    //   select: false,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    dafault: Date.now,
  },
});

export const Courses = mongoose.model("Courses", schema);
