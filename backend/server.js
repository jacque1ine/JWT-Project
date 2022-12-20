const express = require('express') //backend
const dotenv = require('dotenv').config(); //allow us to have a dotenv file wiht our variables in it 
const port =  proccess.env.PORT || 5000 //gets PORT variable from .env file and sets that to the port we want our server to run on. 
//^^will run on port 5000 IF PORT variable in .env file is not found

const app = express()

app.listen(port, () => console.log(`Sever started on port ${port}`))
