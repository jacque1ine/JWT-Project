//this fille is for functionality for endpoints 
//when using mongoose functions to interact with the database we get back a promise, so we need to add async await 
//express-async-handler allows you not to use try catches. this is a package

const asyncHandler = require('express-async-handler')
// @desc Get Goals
// @route GET /api/goals 
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'get goals'})
})

// @desc Set Goals
// @route SET /api/goals 
// @access Private
const setGoals = async (req,res) => {
   if (!req.body.text){
        res.status(400)
        
        throw new Error('Please add a text field'); 

   }
    res.status(200).json({message: 'set goals'})
}

// @desc update goal
// @route SET /api/goal/{id} 
// @access Private
const updateGoal = async (req, res) => {
    res.status(200).json({message: `Update goal: ${req.params.id}`})
}

// @desc Delete Goal
// @route DELETE /api/goal/{id} 
// @access Private
const deleteGoal = async (req,res) => {
    res.status(200).json({message: `Delete goal: ${req.params.id}`})
}

module.exports = {
    getGoals,setGoals,updateGoal, deleteGoal,
    
}