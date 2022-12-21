const express = require('express')
const router = express.Router(); 
const {
    getGoals, 
    updateGoal, 
    setGoals,
    deleteGoal,
}= require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)

router.route('/:id').put(updateGoal).delete(updateGoal)

module.exports = router