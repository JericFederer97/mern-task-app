const asyncHandler = require('express-async-handler')

// @desc Get tasks
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get tasks'});
})

// @desc Set tasks
// @route POST /api/tasks
// @access Private
const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({message: 'Set task'});
})

// @desc Update task
// @route PUT /api/tasks/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update task ${req.params.id}`});
})

// @desc Delete task
// @route DELETE /api/task/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete task ${req.params.id}`});
})

module.exports = {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
}