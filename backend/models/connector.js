const mongoose = require('mongoose');

const dbName = 'studentDb';
//connect to mongoDB
mongoose.connect(`mongodb://localhost/${dbName}`);
mongoose.Promise = global.Promise;

mongoose.connection.once('open', function () {
    console.log(`successfully connected to ${dbName}`)
}).on('error', function (error) {
    console.log(`connection to DB ${dbName} failed :`, error);
})