require("dotenv")

module.exports = {
  PORT: process.env.PORT || 4000,
  DEV_HOST: process.env.DEV_HOST || "localhost",
  DEV_DB: process.env.DEV_DB || "",
  DEV_USERNAME: process.env.DEV_USERNAME || "root",
  DEV_PASSWORD: process.env.DEV_PASSWORD || "",
  TEST_HOST: process.env.TEST_HOST || "localhost",
  TEST_DB: process.env.TEST_DB || "",
  TEST_USERNAME: process.env.TEST_USERNAME || "root",
  TEST_PASSWORD: process.env.TEST_PASSWORD || "",
  PROD_HOST: process.env.PROD_HOST || "localhost",
  PROD_DB: process.env.PROD_DB || "",
  PROD_USERNAME: process.env.PROD_USERNAME || "root",
  PROD_PASSWORD: process.env.PROD_PASSWORD || "",
  SECRET_KEY: process.env.SECRET || "secret"
}
