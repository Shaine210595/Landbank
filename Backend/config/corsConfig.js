
// Devlopement CORS Configurations//
const express= require("express");
const app= express();
const cors = require('cors');

app.use(cors({
  origin:"http://localhost:3000",
}))

const devWhitelist = ["http://localhost:3000"];

const corsDevOptions = {
  origin: function (origin, callback) {
    if (!origin || devWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};

// Production CORS Configurations//

const domainsFromEnv = process.env.CORS_DOMAINS || "";

const productionWhitelist = domainsFromEnv
  .split(",")
  .map((item) => item.trim());

const corsProOptions = {
  origin: function (origin, callback) {
    if (!origin || productionWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};

module.exports = {
  corsDevOptions,
  corsProOptions,
};