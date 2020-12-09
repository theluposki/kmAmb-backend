const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({ error: 'Token não informado.' })
    }

    const parts = authHeader.split(' ')

    if(!parts.length === 2){
        return res.status(401).json({ error: 'Token error.' })
    }

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).json({ error: 'Formato de Token inválido.' })
    }

    jwt.verify(token, authConfig.secret, (error, decoded) => {
        if(error){
            return res.status(401).json({ error: 'Token inválido' })
        }
        res.userId = decoded.id
        return next()
    })
}
