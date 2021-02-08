const express = require('express');
const router = express.Router();
const events = require('../controllers/events');


router.get('/', events.getEvents);

router.post('/add', events.addEvent);

router.delete('/:idEvent', events.deleteEvent);

router.get('/:idEvent', events.findEvent);

router.patch('/:idEvent', events.patchEvent);

router.patch('/subscriptions/:idEvent', events.patchEventSubscriptions);


module.exports = router;