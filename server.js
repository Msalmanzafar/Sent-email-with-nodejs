const express = require('express');
const sendEmail = require('./src/services/mailer');
const app = express();
const port = 7080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/email-verify', (req, res) => {
    sendEmail('gisiy13221@wwgoc.com', "Testing Node-Mailer", "Thanks for service")
        .then(() => {
            res.send('Email sent!');
        })
        .catch(() => {
            res.send('Email not sent!');
        })
});


app.listen(port, () => {
    console.log('app listening on port ' + port);
});