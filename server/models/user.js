import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,

    }
})

export const User = model("User", UserSchema)