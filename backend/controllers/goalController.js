//this fille is for functionality for endpoints 

// @desc Get Goals
// @route GET /api/goals 
// @access Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'get goals'})
}

// @desc Set Goals
// @route SET /api/goals 
// @access Private
const setGoals = (req,res) => {
    res.status(200).json({message: 'set goals'})
}


// @desc update goal
// @route SET /api/goal/{id} 
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal: ${req.params.id}`})
}

// @desc Delete Goal
// @route DELETE /api/goal/{id} 
// @access Private
const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete goal: ${req.params.id}`})
}



module.exports = {
    getGoals,setGoals,updateGoal, deleteGoal,
    
}