var express = require('express');
var router = express.Router();

const performancesCtrl = require('../controllers/performances');

// Require the auth middleware
//const ensureLoggedIn = require('../config/ensureLoggedIn');
	
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// GET /performances
router.get('/', performancesCtrl.index);
router.get('/new', performancesCtrl.new);
router.get('/:id', performancesCtrl.show);

router.post('/', performancesCtrl.create);
module.exports = router;
