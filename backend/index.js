const express = require('express');
var cors = require('cors');
const app = express()
app.use(cors())
app.get('/get-attendance', (req, res) => {
//   res.send('hello world')
var json = require('./students.json');
console.log(json);
  res.json(json)
})

app.listen(3000)