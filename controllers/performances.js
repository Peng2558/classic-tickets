const Performance = require('../models/performance');
const Performer = require('../models/performer');

module.exports = {
  index,
  show,
 new:newPerformance,
 create
};

async function index(req, res) {
  const performances = await Performance.find({});
  res.render('performances/index', { title: 'All Purchased Tickets', performances });
}

async function show(req, res) {
  // Populate the cast array with performer docs instead of ObjectIds
  const performance = await Performance.findById(req.params.id)
  // Mongoose query builder approach to retrieve performers not the movie:
    // Performer.find({}).where('_id').nin(performance.player)
  // The native MongoDB approach uses a query object to find 
  // performer docs whose _ids are not in the performance.player array like this:
  //const performers = await Performer.findById(req.params.id)
  res.render('performances/show', { title: 'Performance Detail', performance });
}
function newPerformance(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('performances/new', { title: 'Buy Ticket', errorMsg: '' });
}
async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    // Update this line because now we need the _id of the new movie
    const performance = await Performance.create(req.body);
    // Redirect to the new movie's show functionality 
    res.redirect(`/performances/${performance._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('performances/new', { errorMsg: err.message });
  }
}
