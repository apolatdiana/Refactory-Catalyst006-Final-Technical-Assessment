const mongoose = require('mongoose');

const IndexModelSchema = new mongoose.Schema({ 
    surname: {
        type: String,
        required: 'Please Enter Name'
    },

    givenName: {
        type: String,
        required: 'Please Enter Name'
    },

    dateOfDirth: {
        type: Date,
        required: true
    },

    placeOfResidence: {
        type: String,
        required: 'Please Enter Phone Number'
    },
    occupation: {
        type: String,
        required: 'Please Enter Phone Number'
    },

    nationality: {
        type: String,
        required: true,
       
    },
    gender: [{ type: String }],

    category: [{ type: String }],
   
   

})

module.exports = mongoose.model('IndexModel', IndexModelSchema);

 