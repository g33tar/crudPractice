var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/crudWithMike');
var posts = db.get('posts');

/* GET home page. */
router.get('/', function (req, res, next) {
    posts.find({}, function (err, docs) {
        console.log(docs);
        res.render('index', {posts: docs});
    })

});

router.get('/post/new', function (req, res, next) {
    res.render('new', {title: 'Express'});
});

router.get('/post/:id', function (req, res, next) {


    posts.findOne({_id: req.params.id}, function (err, doc) {
        res.render('show', {post: doc});
    })

});


router.get('/posts/:id/edit', function (req, res, next) {
    posts.findOne({_id: req.params.id}, function (err, doc) {
        if (err) {
            throw err
        }
        res.render('edit', doc)

    })
});

router.post('/posts/:id/update', function (req, res, next) {

    posts.update({_id: req.params.id}, req.body, function (err, doc) {

        if (err) throw err;
        res.redirect('/')
    })

});


router.post('/posts/:id/delete', function (req, res, next) {
    posts.remove({_id: req.params.id}, function (err, doc) {
        if (err) throw err;
        res.redirect('/')

    })
});

router.post('/', function (req, res, next) {
    if (!req.body.test) {
        res.render('new', {newError: 'You must fill in the input field'});
    }
    else {
        posts.insert(req.body);
        res.redirect('/');
    }
});


module.exports = router;
