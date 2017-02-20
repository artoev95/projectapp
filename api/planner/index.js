var datastore = require('./datastore');
var shortId = require('shortid');
// Get list of contacts
exports.index = function(req, res) {
	console.log(datastore.planner);
  return res.status(200).json(datastore.planner);
} ;
// Creates a new contact in datastore.
exports.create = function(req, res) {
  var plan = {
     id: shortId.generate(),
     location: req.body.location,
     attraction: req.body.attraction,
     approx_cost: req.body.approx_cost 
  };
  datastore.planner.push(plan)
  return res.json(201, plan);
};

exports.update = function(req, res) {
    var index = datastore.planner.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var plan = datastore.planner[index]
       plan.location =  req.body.location
       plan.attraction = req.body.attraction
       plan.approx_cost = req.body.approx_cost
       return res.send(200, plan) 
    } else {
        return res.send(404)
    }
};
// delete an existing contact in datastore.
exports.delete = function(req, res) {
    var index = datastore.planner.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var plan = datastore.planner.splice(index,1);
       return res.send(200, plan) 
    } else {
        return res.send(404)
    }
};