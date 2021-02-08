const express = require('express');
const router = express.Router();
const users = require('../controllers/admins');


router.get('/', users.getAdmins);

router.post('/add', users.addAdmin);

module.exports = router;