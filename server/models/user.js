import mongoose from "mongoose";
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  days: [
    {
      type: Schema.Types.ObjectId,
      ref: "Day",
    },
  ],
  token: {
    type: String || null,
    required: false,
    default: null,
  },
});

UserSchema.pre("save", function (next) {
  this.generateToken();
  next();
});

UserSchema.methods.generateToken = function () {
  const token =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  this.token = token;
  return token;
};

export const User = model("User", UserSchema);
