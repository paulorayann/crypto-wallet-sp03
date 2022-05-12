const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
const port = 3000

app.get('/test'), (req, res) => res.status(200).send({message: 'Welcome to Wallet Crypto API'})

app.listen(port, () => console.log(`Running in port ${port}`))

module.exports = app
 