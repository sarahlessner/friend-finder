var express = require("express");
var app = express()


var friends = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res){
		res.json(friends);

	});
	//post survey results and compare new survey results to existing friends surveys
	app.post('/api/friends', function(req, res) {
		//compatibility logic here
		var newFriend = req.body;
		var lowestDiff = 100;
		var bestMatch;
		friends.forEach( function(friend) {
			var sum = 0;
			var answerArray = friend.survey;
			answerArray.forEach( function(answer, idx) {
				sum += Math.abs(newFriend.survey[idx] - answer);
			})
			if (sum < lowestDiff) {
				lowestDiff = sum;
				bestMatch = friend;
			}
		});
		//pushes new friend to api/friends
		friends.push(req.body);
		//send best match as response
		res.json(bestMatch);

	});
}