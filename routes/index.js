const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}
/* lee el directorio de manera asincrona y nos devuelve un array*/
fs.readdirSync(PATH_ROUTES).filter(file => {
    const name = removeExtension(file)
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router;