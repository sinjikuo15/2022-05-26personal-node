const express = require('express');

const errorController = require('../controllers/404');

////////////////////////////////////////////////////////////


const router = express.Router();

router.get('*', errorController.getError );

module.exports = router;