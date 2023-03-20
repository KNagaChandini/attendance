const express = require('express');
var cors = require('cors');
require('./models/connector');

const app = express()
app.use(cors())

// import the model
const students=require('./models/student');

app.get('/get-attendance', (req, res) => {
  // var json = require('./students.json');
  students.find({}).then(function(data){
    console.log(data)
    res.send(data)
  })
  // res.json(json)
})

app.listen(3000,function(){
  console.log("listening to port 3000");
})