const Performance = require('../models/performance');

module.exports = {
    create,
    delete: deleteReview,
    edit,
    update:updateReview

  };
  async function create(req, res) {
    const performance = await Performance.findById(req.params.id);
  
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    performance.reviews.push(req.body);
    try {
     
      await performance.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/performances/${performance._id}`);
  }
  async function deleteReview(req, res) {
   
    const performance = await Performance.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    if (!performance) return res.redirect('/performances');
    performance.reviews.remove(req.params.id);
    await  performance.save();
    res.redirect(`/performances/${performance._id}`);
  }
  
  async function edit(req, res) {
    try {
    
        const performance = await Performance.findOne({'reviews._id': req.params.id});
        const review = performance.reviews.id(req.params.id);
        res.render('performances/edit', { title: 'Edit Review', review,performance});
    } catch (err) {
        console.error(err);
    
    }
}
async function updateReview(req,res){
  
  try {
   
    const performance = await Performance.findOne({'reviews._id': req.params.id});
    const review = performance.reviews.id(req.params.id);
    review.content = req.body.content;
    review.rating = req.body.rating;
    await performance.save();
    res.redirect(`/performances/${performance._id}`);
  } catch (err) {
    console.error(err);
  }



}