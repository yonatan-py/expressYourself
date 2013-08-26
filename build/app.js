// Generated by CoffeeScript 1.6.3
/*
Module dependencies.
*/


(function() {
  var app, express, http, path, routes, user;

  express = require("express");

  routes = require("./routes");

  user = require("./routes/user");

  http = require("http");

  path = require("path");

  app = express();

  app.set("port", process.env.PORT || 3000);

  app.set("views", __dirname + "/views");

  app.set("view engine", "jade");

  app.use(express.favicon());

  app.use(express.logger("dev"));

  app.use(express.bodyParser());

  app.use(express.methodOverride());

  app.use(app.router);

  app.use(require("less-middleware")({
    src: __dirname + "/public"
  }));

  app.use(express["static"](path.join(__dirname, "public")));

  if ("development" === app.get("env")) {
    app.use(express.errorHandler());
  }

  app.get("/", routes.index);

  app.get("/users", user.list);

  http.createServer(app).listen(app.get("port"), function() {
    return console.log("Express server listening on port " + app.get("port"));
  });

}).call(this);
