//passing err allows you to change the default error message in express
//next allows you to call any further middleware

const errorHandler = (err, req, res, next) => {
    //if res.statusCode has a value then set statusCode to that vale, else set the res.statusCode to 500
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode); 

    //respond with JSON
    res.json({
        message: err.message,
        //stack trace gives additional ifnormation but only if in development mdoe
        //if we are in production, THEN we want stack to be null,  ELSE then show err.stack
        stack: process.env.NODE_ENV === 'production' ? null: err.stack
    })
}

module.exports = {
    errorHandler
}
