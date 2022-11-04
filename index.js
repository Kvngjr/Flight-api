const express = require('express');
const { json } = require('express');
// const flights = require('./controller/flightController');
// const model = require('./model/flights');
const flight = require('./router/flightRoute');

const app = express();

app.use(json());

app.use('/flight', flight);

const port = process.env.PORT || 3000;

app.get("/", (res, req) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}` )
});

