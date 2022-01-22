const TaskList = require('../models/task')

//creating home controller for the home page 
module.exports.home = function (req, res) {
//function to get data from the database
  TaskList.find({}, function (err, task) {
    if (err) {
      console.log('Error in fetching list from db')
      return
    }
    return res.render('home', {
      title: 'To Do List',
      todo_list: task
    })
  })
}
//functin to add new taask and displaying message if list is not created
module.exports.add = function (req, res) {
  TaskList.create(req.body, function (err, task) {
    if (err) { console.log('error in creating the list'); return }
    console.log(task)
    return res.redirect('/')
  })
}

//function to delete already created task list
module.exports.delete = function (req, res) {
//selecting the checkbox using the id with respect to each task created
  const id = req.query
  console.log(id)
//checking the length of the list
  const checkboxes = Object.keys(id).length
//loop to check and select each task 
  for (let i = 0; i < checkboxes; i++) {
//selcting each task by id and deleting function
    TaskList.findByIdAndDelete(Object.keys(id)[i], function (err) {
      if (err) {
        console.log('error in deleteing the item')
      }
    })
  }
  //If no referrer is present, the request is redirected to “/” route by default.
  return res.redirect('back')
}
