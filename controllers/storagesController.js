const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;


module.exports = {
    getItems : async (req, res) => {
        await res.send('storage')
    },
    getItem : (req, res) => {

    },
    createItem : async (req, res) => {
        const { body, file } = req
        const fileData = {
            filename : file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModel.create(fileData)
        res.send(data)
    },
    updateItem : (req, res) => {

    },
    deleteItem : (req, res) => {

    }
}