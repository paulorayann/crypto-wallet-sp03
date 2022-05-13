const bodyParser = require('body-parser')
const wallets = require('./walletsRoute')

module.exports = app => {
    app
    .use(bodyParser.json())
    .use(wallets)

}