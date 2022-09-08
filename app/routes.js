const express = require('express')
const router = express.Router()

// when you create a new version, add the new routes file to this list 
require('./routes/routing-v1.js')(router);
require('./routes/routing-v2.js')(router);

module.exports = router