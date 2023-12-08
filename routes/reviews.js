
const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/performances/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id',reviewsCtrl.delete);
router.get('/performances/:id/edit',reviewsCtrl.edit);


module.exports = router;