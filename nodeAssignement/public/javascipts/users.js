var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

   var sam = {
       name : "Sam",
       address : "237 W Garden Park",
       age: "23"

   };


  res.send(sam);
});

/* accept POST request on the homepage */
router.post('/post', function (req, res, next) {
    res.send('post', {userName: req.body.name, address: req.body.address, age: req.body.age});
});

module.exports = router;
