const { tracksModel } = require('../models')

module.exports = {
    all : async (req, res) => {
        const data = await (tracksModel.find())
        res.send(data)
    },
    getItem : (req, res) => {

    },
    createItem : async (req, res) => {
        const { body } = req
        console.log(body);
        const data = await tracksModel.create(body)
        res.send({
            data
        })
    },
    updateItem : (req, res) => {

    },
    deleteItem : (req, res) => {

    }
}