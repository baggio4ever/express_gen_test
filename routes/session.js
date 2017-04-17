var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var session = req.session;
  if( session && session.count ) {
    session.count ++;
  }else{
    session.count = 1;
  }
  res.send( "Count is "+session.count );

//  res.send('SESSION yeaaah!!')
});

module.exports = router;
