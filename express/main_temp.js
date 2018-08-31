const express = require('express')
const app = express()
var fs = require('fs');
var template = require('./lib/template.js')

app.get('/', function(request, response){
  fs.readdir('./data', function(error,filelist){
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.HTML(list,
    `<h2>${title}</h2>${description}`,
  `<a href="/create">create</a>`)
  response.send(html)
  })
})

app.get('/page:PageId/:chapterId', function(request,response){
  response.send(request.params);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})