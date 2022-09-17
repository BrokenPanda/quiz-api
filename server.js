require('dotenv').config();
const express = require ('express');
const mongoose = require('mongoose');
const routes = require('./routes/quiz');

const helmet = require('helmet');
const compression = require('compression');
const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use('/', routes);

app.route('/')
  .get(function (res) {
    res.sendFile(process.cwd() + '/index.html');
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port);
});

mongoose.connect(
    process.env.MONGODB_URI,
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);