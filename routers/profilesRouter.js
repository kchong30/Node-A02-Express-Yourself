const fs = require("fs").promises;
const path = require("path");

const express = require("express");
const profilesRouter = express.Router();

const dirPath = path.join(__dirname, "../data/");

profilesRouter.get("/", (req, res) => {
    fs.readFile(dirPath + "profiles.json").then((contents) => {
        console.log(contents);
        const profilesJson = JSON.parse(contents);
        console.log(profilesJson);
        res.json(profilesJson);
    })
    .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end("Error");
    });
});

module.exports = profilesRouter;