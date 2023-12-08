var express = require('express');

var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.redirect('/performances');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    prompt:'select_account'
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/performances',
    failureRedirect: '/performances'
  }
));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/performances');
  });
});
module.exports = router;
