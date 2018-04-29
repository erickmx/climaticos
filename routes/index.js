const Router = require("koa-router");
const koa = require("koa");

const userRoute = require("./user");

const app = new koa();

const router = new Router({
  prefix: "/api"
});

router.use(userRoute.routes());

app.use(router.routes());

module.exports = app;
