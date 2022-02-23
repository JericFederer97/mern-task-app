const { urlencoded } = require('express')
const express = require('express')
const router = express.Router()
const {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController')

router.route('/').get(getTasks).post(setTask)
router.route('/:id').put(updateTask).delete(deleteTask)

/* 
router.get('/', getTasks)
router.post('/', setTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)
*/

module.exports = router