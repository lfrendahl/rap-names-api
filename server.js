const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
'21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
     },

'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
     },

'unknown': {

    'age': 0.,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
}
}
//Does this look like an event listener to you? Instead of it being a click it is a network request. When it hears the network request it fires a function.
app.get('/', (request, response) => {
       //We had the __dirname so the server knows where to go to find the index.html file
       response.sendFile(__dirname + '/index.html') 
 
})
//If they make a request to the api we will respond with the object:savage
app.get('/api/:name', (request,response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
}) 


//tell it where to listen and what to do. 
app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
}) 


