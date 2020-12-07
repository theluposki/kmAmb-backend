const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes/User.js'))

app.get('/', (req, res) => res.status(200).json({server: 'ok'}))

app.listen(3000, () => console.log('app running http://localhost:3000'))