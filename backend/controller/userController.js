
import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'

//Api to register user
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        if (!name || !password || !email) {

            return res.json({ success: false, message: "Missing Details" })
        }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "enter a valid email" })

        }

        //validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "enter a strong password " })

        }

        //hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword

        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });

    }
}

//Api for user Login
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'User does not exist' });

        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "Invalid Credentials" });

        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }

}

//API to get user profile data
const getProfile = async (req, res) => {

    try {

        const userId = req.userId
        const userData = await userModel.findById(userId).select('-password')

        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });

    }
}

// API to update user profile
const updateProfile = async (req, res) => {
    try {
         const userId = req.userId;
      const { name, phone, address, dob, gender } = req.body;
      const imageFile = req.file;
  
  const requiredFields = { name, phone, address, dob, gender };
    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.json({ success: false, message: `${key} is missing` });
      }
    }
  
      // Create update object
      const updateData = { name, phone, address, dob, gender };
  
      // If image file is uploaded, upload it to cloudinary
      if (imageFile) {
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
          resource_type: 'image'
        });
        updateData.image = imageUpload.secure_url;
      }
  
      // Update user in one go
      await userModel.findByIdAndUpdate(userId, updateData);
  
      res.json({ success: true, message: "Profile Updated" });
  
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };
  


export { registerUser, loginUser, getProfile, updateProfile }