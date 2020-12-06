const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.json({server: 'ok'}))

app.listen(3000, () => console.log('app running http://localhost:3000'))