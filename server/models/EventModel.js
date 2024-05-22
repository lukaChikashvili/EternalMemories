const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
     },

     surname: {
        type: String,
        required: true
     },

     birth: {
        type: String,
        required: true
     },

     death: {
        type: String,
        required: true
     },

     location: {
        type: String,
        required: true
     },
    
     img: {
      type: String,
      required: true
     },

       
     banner: {
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
