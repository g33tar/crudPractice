var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords');
var Swords = db.get('Swords');

router.get('/', function(req,res){
  Swords.find({}, function(err,swords){
    if(err){
      res.send(err);
    }
    res.status(200).json(swords);
  })
})

router.post('/', function(req,res){
  Swords.insert(req.body, function(err,sword){
    if(err){
      res.send(err)
    }
    res.status(201).json(sword);
  })
})

router.get('/show', function(req,res){
  Swords.findOne(req.body, function(err,sword){
    if(err){
      res.send(err)
    }
    res.status(201).json(sword);
  })
})


router.post('/delete', function(req,res){
  Swords.remove(req.body, function(err,sword){
    if(err){
      res.send(err)
    }
    res.status(201).json(sword);
  })
})

module.exports = router;
