const express = require('express')
const router = express.Router(); 
const { registerUser, loginUser, getMe} = require('../controllers/userController')


// this line refers to the server.js file, 
//app.use('/api/users', require('./routes/userRoutes'))
//since here it says /api/user that would be what the slash represents
router.post('/', registerUser)//when we hit the post req we want to call the registerUser function
router.post('/login', loginUser)
router.get('/me', getMe)




module.exports = router