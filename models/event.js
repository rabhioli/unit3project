const mongoose = require('./connection');

const EventSchema = new mongoose.Schema({
    name: String,
    image: String,
    start: Date,
    end: Date,
    location: String,
    price: Number

});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event