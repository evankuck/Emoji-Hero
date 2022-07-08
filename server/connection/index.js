import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

mongoose.connect(process.env.MONGO_DEV_URI)
    .then(() => console.log("DATABASE CONNECTED"))
    .catch(err => console.log(err))

export default mongoose.connection