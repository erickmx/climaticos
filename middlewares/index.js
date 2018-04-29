const compose = require("koa-compose");
const helmet = require("koa-helmet");
const convert = require("koa-convert");
const cors = require("koa-cors");
const bodyParser = require("koa-bodyparser");
const methodOverride = require("koa-methodoverride");
const handleEror = require("./handle-error");

module.exports = () => {
  return compose([
    helmet(),
    convert(cors()),
    convert(bodyParser()),
    convert(methodOverride()),
    handleEror()
  ]);
};
