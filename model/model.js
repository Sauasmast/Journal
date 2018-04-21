const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jour = new schema({
    date: {
        type:Date,
        default:Date.Now
    },
    title:{
        type: String,
        required: true
    }, 
    journal:{
        type:String,
        required: true
    }
});

mongoose.model('journal',jour);