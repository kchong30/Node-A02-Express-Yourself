'use strict';

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const profilesRouter = require("./routers/profilesRouter");

const port = process.env.PORT || 3003;
const app = express();

app.use(logger("dev"));

app.use("/profiles", profilesRouter);


app.get('*', function(req, res) {
    res.status(404).send('<h2 class = "error">File Not Found</h2>');
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));
