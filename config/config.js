const { TEST_DB, TEST_USERNAME, TEST_PASSWORD, TEST_HOST, DEV_USERNAME, DEV_PASSWORD, DEV_DB, DEV_HOST, PROD_USERNAME, PROD_PASSWORD, PROD_DB, PROD_HOST } = require(".");

module.exports = {
  "development": {
    "username": `${DEV_USERNAME}`,
    "password": `${DEV_PASSWORD}`,
    "database": `${DEV_DB}`,
    "host": `${DEV_HOST}`,
    "dialect": "mysql"
  },
  "test": {
    "username": `${TEST_USERNAME}`,
    "password": `${TEST_PASSWORD}`,
    "database": `${TEST_DB}`,
    "host": `${TEST_HOST}`,
    "dialect": "mysql"
  },
  "production": {
    "username": `${PROD_USERNAME}`,
    "password": `${PROD_PASSWORD}`,
    "database": `${PROD_DB}`,
    "host": `${PROD_HOST}`,
    "dialect": "mysql"
  }
}