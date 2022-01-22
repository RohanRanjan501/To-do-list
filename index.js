// required express module
const express = require('express')
const path = require('path')
require('dotenv').config()//dotenv for the env file to hide the mongo url when uploading on the github
// required db
const db = require('./config/mongoose')
// selecting the port
const port = 8000

const app = express()

// set up view engine as ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded())
app.use(express.static('./assets'))

// used express routes
app.use('/', require('./routes/index'))

// app listening on port
app.listen(port, function (err) {
  // if error in running the server
  if (err) {
    console.log('Error Running the Server !')
    return
  }
  console.log('Server is up and running on port : ', port)
})


// I have added the image of my website and the data base cloud in the assets folder