const express = require('express'),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const createError = require('http-errors');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static("."));
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});
require('../config/initDB')();
const rootRoute = require('../Routes');
const { tags } = require("../../docs/tags.js");
const { components } = require('../../docs/components/components.js');
const { "/api/auth/signin": signIn } = require("../../docs/auth/signIn");
const { "/api/auth/signup": signUp } = require("../../docs/auth/signUp");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      "version": "v1",
      "title": "Airbnb",
    },
    tags,
    components,
    paths: {
      //auth
      "/api/auth/signin": signIn,
      "/api/auth/signup": signUp,
    }
  },
  apis: ["../routes/index.js", "../controllers/Auth/*.js"],
};
const specs = swaggerJsdoc(options);
app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);
app.use("/api", rootRoute)

