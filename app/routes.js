const express = require('express')
const router = express.Router()

router.use('/current/', (req, res, next) => {
    return require(`./views/current/_routes.js`)(req, res, next);
})

router.use('/v1/', (req, res, next) => {
    return require(`./views/v1/_routes.js`)(req, res, next);
})

router.use('/v2/', (req, res, next) => {
    return require(`./views/v2/_routes.js`)(req, res, next);
})

module.exports = router