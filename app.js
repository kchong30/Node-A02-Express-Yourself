'use strict';

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3003;
const app = express();

app.listen(port, () => console.log(`Example app listening on port ${port}`));

app.get('*', function(req, res) {
    res.status(404).send('<h2 class = "error">File Not Found</h2>');
})