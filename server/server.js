const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const { readdirSync } = require('fs')

// Routes
const authRoutes = require('./Routes/auth')
const productRoutes = require('./Routes/product')

// app
const app = express();


//middle ware -- 3 ประสานแนวรุก morgan, body, cors
app.use(morgan("dev"))    // เหมือนไว้โชว์ว่ามีการทำอะไรไปเช่น เรียกใช้ (GET)
app.use(bodyParser.json({ limit:'20mb' }))       // limit ปรับการรับส่งข้อมูลระหว่างหน้าบ้านและหลังบ้าน
app.use(cors()) 

// Routes
// 1
// app.get('/roitai',(req,res)=>{
//     res.send('Hello Routes')
// })

// 2
// app.use('/api',authRoutes)
// app.use('/api',productRoutes)

// 3 auto
readdirSync('./Routes').map((r)=>app.use('/api',require('./Routes/'+r)))



// Run server
const port = 5000;
app.listen(port,()=>console.log('Server is running on port' + port))