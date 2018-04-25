const mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
    'hotelName' : { type: String, required: true },
    'photo' : {type: String, required: true},
    'latitude' : { type: String, required: true },
    'longitude' : { type: String, required: true },
    'provincia' : { type: String, required: true },
    'canton' : { type: String, required: true },
    'distrito' : { type: String, required: true },
    'address' : { type: String, required: true },
    'phone' : { type: String, required: true },
    'custServEmail' : { type: String, required: true },
    'reservEmail' : { type: String, required: true },
    'reservPhone' : { type: String, required: true }
});

module.exports = mongoose.model('hotel', hotelSchema);