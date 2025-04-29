
import mongoose from "mongoose";
import dotenv from 'dotenv';


const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://uniquephul:uniquephul@cluster0.lhdweuc.mongodb.net/");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Connection error", error);
        process.exit(1);
    }
}


export default connectDB;