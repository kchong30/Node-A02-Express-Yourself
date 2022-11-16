'use strict';

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const profilesRouter = require("./routers/profilesRouter");
const indexRouter = require("./routers/indexRouter");
const apiRouter = require("./routers/apiRouter");

const port = process.env.PORT || 3003;
const app = express();
app.use(logger("dev"));

app.use(express.static("public"));

app.use(expressLayouts);
app.set("layout", "./layouts/full-width");

app.set ("views", path.join(__dirname,"view"));

app.set("view engine", "ejs");

app.use (bodyParser.urlencoded({extended: false}));
app.use (bodyParser.json());

app.use(indexRouter);
app.use("/profiles", profilesRouter);


app.get('*', function(req, res) {
    res.status(404).send('<h2 class = "error">File Not Found</h2>');
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));
