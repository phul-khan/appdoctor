
import express from 'express'
import cors from  'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING Great')
})

mongoose.connect("mongodb+srv://uniquephul:uniquephul@cluster0.lhdweuc.mongodb.net/appointment")
    .then(async() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Connection error", err);
    });
//api endpoints

//localhost:4000/api/admin/add-doctor



app.listen(port, ()=> console.log("server Started",port))