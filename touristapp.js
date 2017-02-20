
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/',function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("We're up and running!!!");
});


var plan = require('./api/planner/index');

app.get('/api/planner',plan.index);
app.post('/api/planner',plan.create);
app.put('/api/planner/:id',plan.update);
app.delete('/api/planner/:id',plan.delete);
app.listen(8000)

console.log("Server running at http://127.0.0.1:8000/");