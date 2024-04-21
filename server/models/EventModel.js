const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
     title: {
        type: String,
        required: true
     },

     img: {
        type: String,
        required: true
     },

     lang: {
        type: String,
        required: true
     },

     location: {
        type: String,
        required: true
     },

     time: {
        type: String,
        required: true
     },

     author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
     }


}, {timestamps: true});


const Event = mongoose.model('event', eventSchema);

module.exports = { Event };
