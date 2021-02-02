const express = require('express');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    //do a bunch of stuff
    response.status(200).json({
        message: "Hello JavaScript nerds!",
        status: 200,
    })
})


app.listen(port, () => console.log('Listening on http://localhost:' + port));