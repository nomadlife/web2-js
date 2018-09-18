var express = require('express')
var router = express.Router()
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');
var fs = require('fs')
var template = require('../lib/template')



router.get('/login', function(request, response){
  console.log('login procedure');
  
  var fmsg = request.flash();
  var feedback = '';
  if (fmsg.error){
    feedback = fmsg.error[0];
  }
  console.log('fmsg:',fmsg);
  
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
  `, '');
  response.send(html);
})

/*
router.post('/login_process', function(request, response){
  console.log('login procedure')
  var post = request.body;
  var email = post.email;
  var password = post.pwd;
  if(email === authData.email && password === authData.password){
    request.session.is_logined = true;
    request.session.nickname = authData.nickname;
    request.session.save(function(){
      response.redirect('/');
    });
  } else {
    response.sesnd('Who?');
  }
})
*/

router.get('/logout', function(request,response){
  console.log('logout procedure')
  // request.session.destroy(function(err){
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     response.clearCookie('connect.sid');
  //     response.redirect('/');
  //   }
  // })

  request.logout();
  response.redirect('/');

  // request.logout(function(err){
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     response.clearCookie('connect.sid');
  //     response.redirect('/');
  //   }
  // })
})

  module.exports = router;