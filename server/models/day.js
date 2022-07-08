import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const DaySchema = new Schema({
    emoji: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const Day = model("Day", DaySchema)