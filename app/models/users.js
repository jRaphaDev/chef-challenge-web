var mongoose = require('mongoose');

var schema = mongoose.Schema({

    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
});

mongoose.model('User', schema);