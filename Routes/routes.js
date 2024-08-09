const express=require('express')
const { register, login } = require('../Controllers/userController')
const { addTask, getSingleTask, getUserTasks, deleteTask, editTask,  } = require('../Controllers/taskController')


// create an object for router
const router=new express.Router()

// register
router.post('/user/register',register)

// login
router.post('/user/login',login)

router.post('/user/add-task',addTask)

router.get('/user-task/:userId',getUserTasks)

// get single project
router.get('/user-stask/:taskId', getSingleTask);

// delete project
router.delete('/user/delete-task/:taskId',deleteTask)

// api for edit 

router.put('/edit-task/:taskId',editTask)

module.exports=router