
const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/performances/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id',reviewsCtrl.delete);
router.get('/reviews/edit/:id', reviewsCtrl.edit);

router.put('/reviews/:id', reviewsCtrl.update);
module.exports = router;