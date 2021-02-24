const express = require('express');
const router = express.Router();
const routerApi = require('./api/index');



router.use('/api', routerApi);

module.exports = router;