const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();



// app
const app = express();


//middle ware -- 3 ประสานแนวรุก morgan, body, cors
app.use(morgan("dev"))
app.use(bodyParser.json({ limit:'20mb' }))       // limit ปรับการรับส่งข้อมูลระหว่างหน้าบ้านและหลังบ้าน
app.use(cors()) 



// Run server
const port = 5000;
app.listen(port,()=>console.log('Server is running on port' + port))