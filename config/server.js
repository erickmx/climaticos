const koa = require("koa");
const logger = require("koa-logger");
const mount = require("koa-mount");
const path = require("path");
const views = require("koa-views");

const middleware = require("../middlewares");
const api = require("../routes");

const app = new koa();
const baseDir = __dirname.split("/");
const viewsDir = baseDir
  .filter((val, index) => index !== baseDir.length - 1)
  .join("/");

app.use(middleware());
app.use(
  views(path.resolve(viewsDir, "views/"), {
    extension: "pug"
  })
);

app.use(mount(api));

module.exports = { app };
