const Router = require("koa-router");
const koa = require("koa");

const userRoute = require("./user");
const viewsRoute = require("./views");

const app = new koa();

const router = new Router({
  prefix: "/api"
});

router.use(userRoute.routes());
router.use(viewsRoute.routes());
app.use(router.routes());

module.exports = app;
