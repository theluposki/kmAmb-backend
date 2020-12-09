const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    nome:{
        type: String,
    },
    cnh:{
        type: String,
    },
    vencimentoCnh:{
        type: String,
    },
    matricula:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    createDateAt:{
        type: String,
    },
    createTimeAt:{
        type: String,
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user','admin'],
        default: 'user'
    }]
})


UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User