import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

mongoose.connect("mongodb+srv://meggietest:apassword123@cluster0.iqd07fg.mongodb.net/Emoji-Hero?appName=mongosh+1.4.2")
    .then(() => console.log("DATABASE CONNECTED"))
    .catch(err => console.log(err))

export default mongoose.connection