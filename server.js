const express = require("express");
const next = require("next");
const fs = require("fs");
const https = require("https");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    const options = {
      key: fs.readFileSync("./keys/private.pem"),
      cert: fs.readFileSync("./keys/public.pem")
    };

    https.createServer(options, server).listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on https://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
