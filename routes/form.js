var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('form', { title: 'Send New Message' });
});

router.get('/new', function (req, res, next) {
  res.send('Text');
});

module.exports = router;
