const express = require('express')
const router = express.Router(); 
const {
    getGoals, 
    updateGoal, 
    setGoals,
    deleteGoal,
}= require('../controllers/goalController')

router.get('/', getGoals)

//set goals
router.post('/', setGoals)

//update
router.put('/:id', updateGoal)

//delete
router.delete('/:id', deleteGoal)

module.exports = router