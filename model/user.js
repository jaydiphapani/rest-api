let mongoose = require('mongoose');
// let validate = require('validator');
let Schema = mongoose.Schema

let userDatas = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) { throw new Error('invalid Email') }
        // }
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    mobile_1: {
        type: Number,
        min: 10,
        validate(value) {
            if (value.toString().length !== 10) {
                throw new Error('Mobile number must be 10 digits');
            }
        }   
    },
    mobile_2: {
        type: Number,
        min: 10,
        validate(value) {
            if (value.toString().length !== 10) {
                throw new Error('Mobile number must be 10 digits');
            }
        }
    },
    Address:{
        type: String,
        unique : true,
    },
    Address_office:{
        type: String,
        unique : true,
    }
})
let USERS = mongoose.model('user', userDatas)
module.exports = USERS;