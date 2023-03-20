const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema and model
const StudentSchema = new Schema({
    rollNumber: {
        type: Number
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    isPresent: {
        type: Boolean
    }
})

const Students = mongoose.model('students', StudentSchema);

module.exports = Students;