var express = require('express')
var router = express.Router()
var template = require('../lib/template')
var auth = require('../lib/auth')
var shortid = require('shortid');
var db = require('../lib/db')

module.exports = function (passport) {
  router.get('/login', function (request, response) {
    auth.testLog(request, response)

    var fmsg = request.flash();
    var feedback = '';
    if (fmsg.error) {
      feedback = fmsg.error[0];
    }

    var title = 'WEB - login';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
  <div style="color:red;">${feedback}</div>
  <form action="/auth/login_process" method="post">
  <p><input type="text" name="email" placeholder="email"></p>
  <p><input type="password" name="pwd" placeholder="password"></p>
  <p>
  <input type="submit" value="login">
  </p>
  </form>
  `, '' ,auth.statusUI(request, response));
    response.send(html);
  })


router.post('/login_process',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true,
    successFlash: true
  }));

router.get('/register', function (request, response) {
  auth.testLog(request, response)

  var fmsg = request.flash();
  var feedback = '';
  if (fmsg.error) {
    feedback = fmsg.error[0];
  }

  var title = 'WEB - register';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
<div style="color:red;">${feedback}</div>
<form action="/auth/register_process" method="post">
<p><input type="text" name="email" placeholder="email" value="tester2@gmail.com"></p>
<p><input type="password" name="pwd" placeholder="password" value="111111"></p>
<p><input type="password" name="pwd2" placeholder="password" value="111111"></p>
<p><input type="text" name="displayName" placeholder="display name" value="tester2"></p>
<p><input type="submit" value="register"></p>
</form>
`, '');
  response.send(html);
})

router.post('/register_process', function (request, response) {
  // todo : validation
  // check email duplicaation check
  // check if pwd,pwd2 are same
  var post = request.body;
  var email = post.email;
  var pwd = post.pwd;
  var pwd2 = post.pwd2;
  var displayName = post.displayName;
  if(pwd !== pwd2){
    request.flash('error','password must same!');
    response.redirect('/auth/register');
  }else{
    var user = {
      id:shortid.generate(),
      email:email,
      password:pwd,
      displayName:displayName
    }
      db.get('users').push(user).write();
      request.login(user, function(err){
        console.log('redirect');
        return response.redirect('/');
      })

    }
});

router.get('/logout', function (request, response) {
  request.logout();
  response.redirect('/');
})

  return router;
}