var express = require('express');
var router = express.Router();


const data  = [
  {
    name: 'tushar',
    age: 28
  },
  {
    name: 'kumar',
    age: 30
 
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(data);
});
router.get('/check', function(req, res, next) {
  res.send(data);
});

module.exports = router;
