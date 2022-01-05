/**
 * MDEForge PERSISTENCE API ENTRY POINT
 *
 * This api developed using Node.js persists data
 * The persisted data might be model artifacts or its metadata.
 * It consumes the search engine as well.
 */

const express = require("express");

// Requiring core modules
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");

// Requiring auxiliary operations
const logging = require("./startup/logging");
const { connectDb } = require("./startup/database");
const init_app = require("./startup/routes");
const validate = require("./startup/validation");
const logger = require("./middleware/logger");
const eurekaDiscovery = require("./startup/eureka-discovery");
const { schema } = require("./route/graphql/Schema");
// Expose Env variables
dotenv.config();

/**
 * Bootstrapping the application
 */
logging();
connectDb();
init_app(app);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
validate();

// We define the port
const PORT = process.env.PORT || 3200;
// eurekaDiscovery.registerWithEureka("persistence-api", PORT);

const server = app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}...`);
});

module.exports = server;
