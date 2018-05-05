const Router = require("koa-router");
const koa = require("koa");

const viewsRoute = require("./views");
const apiRoute = require("./api");

const app = new koa();

const router = new Router();

router.use(apiRoute.routes());
router.use(viewsRoute.routes());
app.use(router.routes());

module.exports = app;
