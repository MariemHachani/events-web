const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRoute = require('./routes/users');
const eventsRoute = require('./routes/events');
const adminRoute = require('./routes/admins');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const connect_url = process.env.CONNECTION_URL;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/users', usersRoute);
app.use('/events', eventsRoute);
app.use('/admins', adminRoute);


app.get('/', (req, res) => {
    res.send('we are on home');
});

mongoose.connect(connect_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to db");
    });
app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});
mongoose.set('useFindAndModify', false);