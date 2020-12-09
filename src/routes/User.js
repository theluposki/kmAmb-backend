const express = require('express')
const router = express.Router()

const UserController = require('../controllers/User')
const auth = require('../middlewares/auth.js')

router.get('/users', auth.isAdmin, UserController.findAll)       
router.get('/user/:id', auth.isAdmin, UserController.findOneId)       

router.post('/user/register', auth.isAdmin, UserController.register)       
router.post('/user/auth', UserController.auth) // Esta rota não é protegida
router.put('/user/update/:id', auth.isAdmin, UserController.update)       
router.delete('/user/delete/:id', auth.isAdmin, UserController.delete)       

module.exports = router
