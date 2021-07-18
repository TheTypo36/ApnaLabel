const express = require('express');
const app = express();
const port = 2000;
const expresslayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));
app.listen(port, function (err) {
    if (err) {
        console.log(`error in running server ${err}`);
        return;
    } else {
        console.log(`the server is fired up on port ${port}`);
    }
})