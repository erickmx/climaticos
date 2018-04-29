const koa = require("koa");
const logger = require("koa-logger");
const mount = require("koa-mount");
const middleware = require("../middlewares");

const app = new koa();

app.use(middleware());

//app.use(mount())

module.exports = { app };
