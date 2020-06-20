//jshint esversion:6
const router = require("express").Router();
let detail = require("../model/details.model");

router.route("/").get((req,res)=>{
  detail.find()
  .then(details => res.json(details))
  .catch(err =>res.status(400).json("error: "+err));
});

router.route("/add").post((req,res)=>{
  const firstname =req.body.firstname;
  const lastname =req.body.lastname;
  const email =req.body.email;
  const phonenumber =Number(req.body.phonenumber);
  const query = req.body.query;

  const newDetails = new detail({
    firstname,
    lastname,
    email,
    phonenumber,
    query,
  });

  newDetails.save()
  .then(()=>res.json("Details added!"))
  .catch(err=>res.status(400).json("Error: "+ err));
});

module.exports = router;
