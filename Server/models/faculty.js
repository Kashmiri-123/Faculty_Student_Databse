const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
    name:String,
    address:String,
    studentId:String
});
 
module.exports = mongoose.model('Faculty',facultySchema);