const epxress = require('express');
const router = epxress.Router();
const actions = require('../controllers/actions');

router.post('/register', actions.registerUsers );



module.exports = router;