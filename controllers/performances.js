const Performance = require('../models/performance');
//const Performer = require('../models/performer');

module.exports = {
  index,
  show,
 new:newPerformance,
 create
 //edit
};

async function index(req, res) {
  const performances = await Performance.find({});
  res.render('performances/index', { title: 'All Purchased Tickets', performances });
}

async function show(req, res) {
  
  const performance = await Performance.findById(req.params.id)
  res.render('performances/show', { title: 'Performance Detail', performance });
}
function newPerformance(req, res) {

  res.render('performances/new', { title: 'Buy Ticket', errorMsg: '' });
}
async function create(req, res) {
 
  req.body.nowShowing = !!req.body.nowShowing;
  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {

    const performance = await Performance.create(req.body);
   
    res.redirect(`/performances/${performance._id}`);
  } catch (err) {

    console.log(err);
    res.render('performances/new', { title: 'Buy Ticket', errorMsg: '' });
  }
}
 async function edit(req,res){


  res.render('performances/edit', { title: 'Edit Review', errorMsg: '' });

 }