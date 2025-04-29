import validator from "validator";
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctormodel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const addDoctor = async (req, res) => {
    try {
      const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
      const imageFile = req.file;
  
      if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
        return res.json({ success: false, message: "Missing details" });
      }
  
      if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Please enter a valid email" });
      }
  
      if (password.length < 8) {
        return res.json({ success: false, message: "Please enter a strong password" });
      }
  
      if (!imageFile) {
        return res.json({ success: false, message: "Please upload an image" });
      }
  
      const existingDoctor = await doctorModel.findOne({ email });
      if (existingDoctor) {
        return res.json({ success: false, message: "Doctor already registered with this email" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;
  
      const doctorData = {
        name,
        email,
        image: imageUrl,
        password: hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address
      };
  
      const newDoctor = new doctorModel(doctorData);
      await newDoctor.save();
  
      res.json({ success: true, message: "Doctor added" });
    } catch (error) {
      console.log("error here");
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };
  
// API for admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    console.log(process.env.ADMIN_EMAIL);
    console.log(process.env.JWT_SECRET);
    if (email === process.env.ADMIN_EMAIL && password === "Test@123") {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '12h' }); // better practice
      console.log("the token is", token);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all doctors
const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find();
    res.json({ success: true, doctors });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addDoctor, loginAdmin, allDoctors };
