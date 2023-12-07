const Performance = require('../models/performance');

module.exports = {
    create,
    delete: deleteReview

  };
  async function create(req, res) {
    const performance = await Performance.findById(req.params.id);
  
    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    // We can push (or unshift) subdocs into Mongoose arrays
    performance.reviews.push(req.body);
    try {
      // Save any changes made to the performance doc
      await performance.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/performances/${performance._id}`);
  }
  async function deleteReview(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const performance = await Performance.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    // Rogue user!
    if (!performance) return res.redirect('/performances');
    // Remove the review using the remove method available on Mongoose arrays
    performance.reviews.remove(req.params.id);
    // Save the updated performance doc
    await  performance.save();
    // Redirect back to the movie's show view
    res.redirect(`/performances/${performance._id}`);
  }
