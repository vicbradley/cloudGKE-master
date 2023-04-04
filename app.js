'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Vic Bradley\n52020002\nTeknik Informatika')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
