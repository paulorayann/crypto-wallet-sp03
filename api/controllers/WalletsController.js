const database = require('../models')

class WalletsController {
   static async getAllWallets(req, res) {
       try{
        const allWallets = await database.Wallets.findAll({include: [database.Coins, database.Transactions] })
        return res.status(200).json(allWallets)
       } catch (error) {
           return res.status(500).json(error.message)
       }
    }


    static async getWalletByAddress (req, res) {
        const { address } = req.params
        try {
            const byAddress = await database.Wallets.findOne( {where: { address:Number(address) }})
            return res.status(200).json(byAddress)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
    static async createWallet(req, res) {
        const newWallet = req.body
        try {
            const newCreatedWallet = await database.Wallets.create(newWallet)
            return res.status(200).json(newCreatedWallet)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deleteWallet(req, res) {
        const { address } = req.params
        try {
            await database.Wallets.destroy({where: { address:Number(address) }})
            return res.status(204).json({message: `address ${address} was successfully deleted`})
        } catch(error){
            return res.status(404).json(error.message)
        }

    }

}

module.exports = WalletsController