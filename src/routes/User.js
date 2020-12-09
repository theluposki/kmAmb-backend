const express = require('express')
const router = express.Router()

const UserController = require('../controllers/User')
const auth = require('../middlewares/auth.js')

router.get('/users', auth, UserController.findAll)       
router.get('/user/:id', UserController.findOneId)       

router.post('/user/register', UserController.register)       
router.post('/user/auth', UserController.auth)       
router.put('/user/update/:id', UserController.update)       
router.delete('/user/delete/:id', UserController.delete)       

module.exports = router