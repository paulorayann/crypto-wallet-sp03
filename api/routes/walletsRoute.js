const {Router} = require('express')
const WalletsController = require('../controllers/WalletsController')

const router = Router()

router
    .get('/api/v1/wallet', WalletsController.getAllWallets)
    .get('api/v1/wallet/:address', WalletsController.getWalletByAddress)
    .post('api/v1/wallet', WalletsController.createWallet)

module.exports = router