const Router = require("koa-router");

const UserRoute = require("./user");

router = new Router({
  prefix: "/api"
});

router.use(UserRoute.routes());

module.exports = router;
