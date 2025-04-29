
import express from 'express'

import { addDoctor,allDoctors,loginAdmin } from '../controller/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailablity } from '../controller/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',upload.single('image') , addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors',authAdmin , allDoctors)
adminRouter.post('/change-availability',authAdmin , changeAvailablity)

export default adminRouter
