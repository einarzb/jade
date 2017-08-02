var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login_form', urlencodedParser, function(req, res) {
  var response = {
    username:req.body.username,
    password:req.body.password,
    login:'failed'
  }
var resin = auth.validate(response.username,response.password);
response.redirect = resin.redirect;
response.login = resin.status;
res.send(response)
});

module.exports = router;
