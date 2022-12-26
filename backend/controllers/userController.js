// @desc    Register new user 
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
    res.json ({
        message: 'Register User'
    })
}

// @desc    Authenticate new user 
// @route   POST /api/login
// @access  Public
const loginUser = (req, res) => {
    res.json ({
        message: 'Login User'
    })
}

// @desc    Authenticate new user 
// @route   GET /api/me
// @access  Public
const getMe = (req, res) => {
    res.json ({
        message: 'got user data'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}