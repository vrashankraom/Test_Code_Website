//jshint esversion:6
const express = require("express");
const cors=require("cors");
const mongoose =require("mongoose");
require("dotenv").config();
const bodyParser =require("body-parser");
const app=express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const connection =mongoose.connection;
connection.once("open",()=>{
  console.log("Mongoose connected successfully");
});
mongoose.set('useUnifiedTopology', true);

const detailsRouter = require("./routes/details");
app.use("/details",detailsRouter);

app.listen(port,()=>{
  console.log(`Server is running at port: ${port}`);
});
