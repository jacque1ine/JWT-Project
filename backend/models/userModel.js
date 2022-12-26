const mongoose = require('mongoose')

//definining structure of a user object
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    }, 
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
    }, 
    password: {
        type: String,
        required: [true, 'Please add a password']
    }, 
}, 
{   
    timestamps: true, //will automatically make a createdAt and updatedAt field
}
)

module.exports = mongoose.model('User', userSchema)