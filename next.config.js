const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

// const withNextEnv = nextEnv();
module.exports = {
  reactStrictMode: true,
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};
