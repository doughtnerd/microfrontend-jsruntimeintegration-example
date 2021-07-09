import { Knex } from "knex";
import { connectDB } from "./database/connect";
import dbConfig from './database/knexfile';
import { RecipeQuerier } from "./database/queries/recipe/recipe-querier";
import { createRoutes } from "./routes";
import { createServer } from "./server";

const PORT = process.env.port ?? 3005;

connectDB(dbConfig).then((dbInstance: Knex) => {
  const recipesQuerier = new RecipeQuerier(dbInstance)
  
  const routes = createRoutes(recipesQuerier)

  const server = createServer(routes)

  server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
}).catch(e => {
  console.error('ERROR STARTING DB ' + e.message);
  process.exit(0)
})


process.on("SIGINT", () => {
  console.log("Interrupt detected, exiting...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("Terminate detected");
});

process.on("unhandledRejection", (reason: any, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
});

process.on("uncaughtException", function (err) {
  console.log(err);
});
