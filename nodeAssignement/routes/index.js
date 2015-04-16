var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sam Assignment' });
});

router.get('/commits', function(req, res){
  'use strict';
   res.render('commits', {title: 'Hope this works'})
})

router.get('/commitData', function(req, res) {
    request.get("https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=mechamsamuel")
    .end(function(err, response){
        res.json(response);
    })
});

module.exports = router;
