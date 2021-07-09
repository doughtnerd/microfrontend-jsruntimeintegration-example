import express, { Express } from 'express'

export function createServer(routes): Express {
  const server = express();

  server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

  server.use(express.urlencoded({extended: true}));
  server.use(express.json()) // To parse the incoming requests with JSON payloads

  server.use('/', (req, res, next) => {
    console.log(`caught request for: ${req.url}`)
    return next()
  })

  server.use("/api", routes);

  server.use(function (req, res, next) {
    var err: any = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  server.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.json(err.message);
  });

  return server
}