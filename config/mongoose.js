//loading the library
const mongoose = require('mongoose')
//using mongodb cloud version ATLAS which is the cloud version of the mongo db
//the url of the mongodb atlas is in the .env file as it contains the username and password of the database which will be git ignored when
//adding on github
const URI= process.env.MONGODB_URL; 
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
//establishing the connection
const db = mongoose.connection

//displaying error if connection is not established with the database
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'))

// displaying connection success message when connection is established
db.once('open', function () {
  console.log('Connected to Database :: MongoDB')
})
module.exports = db
