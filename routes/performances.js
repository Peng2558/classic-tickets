var express = require('express');
var router = express.Router();

const performancesCtrl = require('../controllers/performances');
const ensureLoggedIn = require('../config/ensureLoggedIn');
// Require the auth middleware
//const ensureLoggedIn = require('../config/ensureLoggedIn');
	
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// GET /performances
router.get('/', performancesCtrl.index);
router.get('/new',ensureLoggedIn, performancesCtrl.new);
router.get('/:id', performancesCtrl.show);

router.post('/',ensureLoggedIn, performancesCtrl.create);
//router.get('/:id/edit',ensureLoggedIn, performancesCtrl.edit);//new for test
module.exports = router;
