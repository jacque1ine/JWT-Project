const express = require('express') //backend
const dotenv = require('dotenv').config(); //allow us to have a dotenv file wiht our variables in it 
const port =  process.env.PORT || 5000 //gets PORT variable from .env file and sets that to the port we want our server to run on. 
//^^will run on port 5000 IF PORT variable in .env file is not found

const app = express()

/*Definition for HTTP request handler for the URL path api/goals. 
listens for an HTTP request to be made to this URL path and, when it receives such a request, 
it sends a response with the message "Get goals".
anonymous function that takes two arguments: req (short for request) and res (short for response). 
The res.send function sends an HTTP response to the client with the specified message.
*/
app.get('/api/goals', (req, res) => {
    res.send('Get goals')
})

app.listen(port, () => console.log(`Sever started on port ${port}`))
