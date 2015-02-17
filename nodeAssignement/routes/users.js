var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

   var sam = {
       name : "Sam",
       address : "237 W Garden Park",
       age: "23"

   }


  res.send(sam);
});

module.exports = router;
