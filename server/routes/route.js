const epxress = require('express');
const router = epxress.Router();
const actions = require('../controllers/actions');
const { authenticateUser } = require('../middleware/auth');

router.post('/register', actions.registerUsers );
router.post('/login', actions.loginUsers);
router.post('/events', authenticateUser, actions.createEvent );
router.get('/events/all', actions.getAllEvents);

module.exports = router;