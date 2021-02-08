const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const connect_url = process.env.CONNECTION_URL;

mongoose.connect(connect_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to db");
    });
app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});