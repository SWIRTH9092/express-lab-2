require('dotenv').config();

const express = require('express');

const app = express()

const PORT = process.env.PORT;
console.log(process.env.PORT);
  

app.get('/greeting/:name', (request,response) => {
    response.send(`Hey ${request.params.name}!!!  It's so great to see you!`)
}
)


app.listen(PORT, () =>  {
    console.log('listening on port ', PORT)
})