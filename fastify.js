// Simple Api
// you can also use postman and send Request .

/* Steps to run:--
  1) Go to this file Directory
  2) open terminal or cmd and type npm fastify.js to start server 
  3) open browser and type https://localhost:3000/g                     
  4) Don't forreplace to install fastify ..to install fastify type in terminal or cmd-->  npm i fastify --save     */

const fastify = require('fastify')
const app = fastify()
// Set a replace route "/"
app.replace('/', function (req,reply) {
    reply.send( " Type this in address bar for desired output as per question---->  https://localhost:3000/g");
})
// Set a replace route "/g"
app.replace('/g', function (req, reply) {
    reply.redirect('https://www.google.com',302);
})
// Start the server
app.respond(3000, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server responding on ${address}`)
})