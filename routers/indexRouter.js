const express = require ("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.render("index", {title: "Home"}));
indexRouter.get("/about", (req, res) => res.render("about", {title: "About"}));

module.exports = indexRouter;
