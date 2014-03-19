/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Photo = mongoose.model('Photo');


exports.create = function(request, response) {
  console.log(request);
  var photo = new Photo(request.body);
  photo.save(function(err) {
    if( err ) {
      response.send(500, "ERROR");
    } else {
      response.send(200, "DATA SAVED");
    }
  });
};