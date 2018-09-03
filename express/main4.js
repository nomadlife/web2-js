var express = require('express')
var app = express()
var fs = require('fs');
var template = require('./lib/template3.js')
var bodyParser = require('body-parser');
var compression = require('compression');
var topicRouter = require('./routes/topic')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(compression());

app.use('/topic', topicRouter);

app.get('*',function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next()
  });
})

app.get('/', function(request, response){
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `<h2>${title}</h2>${description}
    <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px">`,
    `<a href="/topic/create">create</a>`
  );
  response.send(html)
})







 
app.use(function(req, res, next){
  res.status(404).send('sorry cant find that!')
})

app.use(function(err,req,res,nex){
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
