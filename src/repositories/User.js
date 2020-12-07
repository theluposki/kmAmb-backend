const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

const generateToken = async (id) => {
    const token = await jwt.sign({ id: id }, authConfig.secret, {
        expiresIn: 86400
    })
    return token
}

const findEmailPassword = async (email) => {
    return await User.findOne({ email }).select('+password')
}

exports.findEmail = async (email) => {
    return await User.findOne({ email })   
}

exports.register = async (body) => {
    return await User.create(body)
}

exports.auth = async (email, password) => {
    const user = await findEmailPassword(email)

    if(!user) {
        return { error: 'Usuario não existe.' }
    }

    if(!await bcrypt.compare(password, user.password)) {
        return { error: 'Senha inválida.'}
    }

    //user.password = undefined

    return { user, token: await generateToken(user.id) }

}

exports.find = async () => {
  return await User.find()
}