require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes/User.js'))
app.use(require('./routes/ServiceControlKM.js'))

app.get('/', (req, res) => res.status(200).json({server: 'ok'}))

app.listen(process.env.PORT, () => console.log(`app running http://localhost:${process.env.PORT}`))