var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hello there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/form', function (req, res, next) {
  const messageUser = req.body.fname;
  const messageText = req.body.message;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;
