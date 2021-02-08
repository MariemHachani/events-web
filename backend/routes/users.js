const express = require('express');
const router = express.Router();
const users = require('../controllers/users');


router.get('/', users.getUsers);

router.post('/add', users.addUser);

router.delete('/:idUser', users.deleteUser);

router.get('/:idUser', users.findUser);

router.patch('/:idUser', users.patchUser);

module.exports = router;