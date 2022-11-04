require('dotenv').config();

const express = require('express');

const app = express()

const PORT = process.env.PORT;
console.log(process.env.PORT);
  

app.get('/greeting/:name', (request,response) => {
    response.send(`Hey ${request.params.name}!!!  It's so great to see you!`)
}
)

app.get('/tip/:total/:tipPercentage', (request,response) => {
    tip = Number(request.params.total) * Number(request.params.tipPercentage) / 100
    response.send(`${tip}`)
}  )



app.listen(PORT, () =>  {
    console.log('listening on port ', PORT)
})