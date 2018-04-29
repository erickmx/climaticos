const koa = require("koa");
const logger = require("koa-logger");
const mount = require("koa-mount");

const app = new koa();

//app.use(mount())

module.exports = { app };
