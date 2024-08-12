var express = require('express');
let USERS = require('../model/user');
var mobile = require('is-mobile');
var Address = require ('address');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/Signup', async function(req,res, next){
  try {
    console.log(req.body);
    
    let userCreate = await USERS.create(req.body)
   
    res.status(201).json({
      status: "Success",
      message: "user Create Successfull",
      data: userCreate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
})
router.get('/Find', async function (req, res, next) {
  try {
    let userFound = await USER.find()
    res.status(200).json({
      status: "Success",
      message: "user Found Successfull",
      data: userFound
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});
router.post('/login', async function (req, res, next) {
  let {password} = req.body
  try {
    let userLogin = await USERS.findOne({ email: req.body.email })
    let userPassword = await USERS.findOne({ password: req.body.password })
    //let passwordc = await bcrypt.compare(password,userLogin.password)
    
    if (!userLogin) {
      throw new Error("User Not Found!")
    }
    if (!password) {
      throw new Error("wrong password")
    }
    res.status(200).json({
      status: "Success",
      message: "user login Successfull",
      data: userLogin
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});
module.exports = router;
