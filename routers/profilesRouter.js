const fs = require("fs").promises;
const path = require("path");

const express = require("express");
const profilesRouter = express.Router();

const dirPath = path.join(__dirname, "../data/");

profilesRouter.get("/", (req, res) => {      
    fs.readFile(dirPath + "profiles.json")
      .then((contents) => {
        const profilesJson = JSON.parse(contents);
        profilesJson.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
  
        // prepare and send an OK response
        res.render("profiles", {
          title: "Express Yourself - Profiles",
          profiles: profilesJson,
        });
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end("Error");
      });
  });

  profilesRouter.get("/:id", (req, res) => {
    fs.readFile(dataPath + "profiles.json")
      .then((contents) => {
        console.log(contents);
        // need to parse the raw buffer as json if we want to work with it
        const profilesJson = JSON.parse(contents);
        console.log(profilesJson);
        // sort the objects by name
        profilesJson.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        const profileJson = profilesJson
          .filter((profile) => profile.id === req.params.id)
          .shift();
        console.log(profileJson);
        //   prepare and send an OK response
        res.render("profile", {
          title: "Express Yourself - " + profileJson.name,
          profiles: profilesJson,
          profileId: req.params.id,
          layout: "./layouts/sidebar",
        });
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end("Error");
      });
  });

module.exports = profilesRouter;