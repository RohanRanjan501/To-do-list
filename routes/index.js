const express = require('express')
const router = express.Router()
// declaring the required home controller module to handle the routes
const homeController = require('../controllers/home_controller')
//success message when the router is loaded
console.log('Router loaded')
//router for homepage
router.get('/', homeController.home)
// touter using post to add the dataa using add-task
router.post('/add-task', homeController.add)
//routerr fotdeleting the task using the home controller....using get to get the data which you want to delete
router.get('/delete-task', homeController.delete)
module.exports = router
