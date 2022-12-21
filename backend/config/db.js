//this file allows you connect to mongoDB with mongoose 
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB connected : ${conn.connection.host}`.cyan.underline);
    } catch (error){
        console.log(error)
        //1 represents fail
        proccess.exit(1)

    }
}

module.exports = connectDB 