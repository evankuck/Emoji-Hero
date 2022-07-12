import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
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
  // encrypt password
  next();
});

UserSchema.methods.generateToken = function () {
  console.log("creating token for user", this.email);
  const token = jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  console.log(token)
  this.token = token;
  this.save()
  return token;
};

export const User = model("User", UserSchema);
