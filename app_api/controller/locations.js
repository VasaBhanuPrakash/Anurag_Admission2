var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};
var mongoose=require("mongoose")
const Loc=mongoose.model("Location")
module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
var mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    name: String,
  });
 
module.exports.locationsReadOne = function (req, res) {
try {
const location = await
Loc.findById(req.params.locationid).exec();
sendJsonResponse(res, 200, location);
console.log(location)
} catch (err) {
// Handle the error
sendJsonResponse(res, 500, { error: 'An error occurred' });
}
};
module.exports.locationsUpdateOne = async function (req, res) {
    try {
        const location = await Loc.findById(req.params.locationid).exec();

        if (!location) {
            sendJsonResponse(res, 404, { error: 'Location not found' });
            return;
        }
        if (req.body) {
            if (req.body.author) location.author = req.body.author;
            if (req.body.rating) location.rating = req.body.rating;
            if (req.body.reviewText) location.reviewText = req.body.reviewText;
        }
        await location.save();
        sendJsonResponse(res, 200, location);
    } catch (err) {
        // Handle the error
        sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
};

module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
