const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User' //allows us to have a user associated with a goal

    },
    
    text : {
        type: String, 
        required: [true, 'Please add a text value'], 
    },
}, 
//this is a seperate object
{
    timestamps: true, 
}

)

module.exports = mongoose.model('Goal', goalSchema)