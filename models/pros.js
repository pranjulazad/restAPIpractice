const mongoose = require('mongoose');
const schema = mongoose.Schema;

const GeoSchema = new schema({
    type : {
        type : String,
        default : "Point"
    },
    coordinates : {
        type : [Number],
        index : "2dsphere"
    }   
});  

const prosSchema = new schema({
    name : {
        type : String,
        required : [true,'Name Field is Required']
    },
    rank : {
        type : String
    },
    available : {
        type : Boolean,
        default : false
    },
    geometry : GeoSchema
});

const Pros = mongoose.model('Pros',prosSchema);

module.exports = Pros;