const mongoose = require('mongoose')

//defing the schema for the task list in database
const listSchema = new mongoose.Schema({
//title of the task entered
  title: {
    type: String,
    required: true
  },
//specifying in which category the given task is
  category: {
    type: String,
    required: true
  },
//to set the data of the task
  date:
    {
      type: String,
      required: true
    },
  priority: {
    type: String,
    required: true
  }
})

const TaskList = mongoose.model('TaskList', listSchema)
//he object reference that gets returned from the require() calls.
module.exports = TaskList
