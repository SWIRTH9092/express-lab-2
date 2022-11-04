require('dotenv').config();

const express = require('express');

const app = express()

const PORT = process.env.PORT;
console.log(process.env.PORT);
 
// Magic 8 ball answers
const answers = 
          ["It is certain", 
           "It is decidedly so", 
           "Without a doubt", 
           "Yes definitely",
           "You may rely on it", 
           "As I see it yes", 
           "Most likely", 
           "Outlook good",
           "Yes", 
           "Signs point to yes", 
           "Reply hazy try again", 
           "Ask again later",
           "Better not tell you now", 
           "Cannot predict now", 
           "Concentrate and ask again",
           "Don't count on it", 
           "My reply is no", 
           "My sources say no",
           "Outlook not so good", 
           "Very doubtful"];

app.get('/greeting/:name', (request,response) => {
    response.send(`Hey ${request.params.name}!!!  It's so great to see you!`)
}
)

//http://localhost:3000/tip/90/20
app.get('/tip/:total/:tipPercentage', (request,response) => {
    tip = Number(request.params.total) * Number(request.params.tipPercentage) / 100
    response.send(`${tip}`)
}  )

//http://localhost:3000/magic/Will%20I%20Be%20A%20Millionaire
app.get('/magic/:question', (request,response) =>{
    const questionAsked = request.params.question
    const answerSelected = (Math.floor(Math.random() * 20)); 
    console.log("question asked", request.params.question) 
    response.send(`<h1>Question asked: ${request.params.question}?  Answer: ${answers[answerSelected]}. </h1>`)
})

app.listen(PORT, () =>  {
    console.log('listening on port ', PORT)
})