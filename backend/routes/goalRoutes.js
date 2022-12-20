const express = require('express')
const router = express.Router(); 

/*Definition for HTTP request handler for the URL path api/goals. 
listens for an HTTP request to be made to this URL path and, when it receives such a request, 
it sends a response with the message "Get goals".
anonymous function that takes two arguments: req (short for request) and res (short for response). 
The res.send function sends an HTTP response to the client with the specified message.
*/
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

//create goal
router.post('/', (req, res) => {
    res.status(200).json({message: 'set goals'})
})

//update
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update goal: ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete goal: ${req.params.id}`})
})







module.exports = router