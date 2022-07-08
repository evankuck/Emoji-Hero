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
    },
    days: [{
        type: Schema.Types.ObjectId,
        ref: "Day"
    }]
})

export const User = model("User", UserSchema)