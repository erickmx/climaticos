const Router = require("koa-router");

const router = new Router({
  prefix: "/user"
});

const fakeUSers = [
  {
    username: "sjdna",
    password: "dence",
    id: 1
  }
];

router.get("/", async ctx => (ctx.body = fakeUSers));

router.get("/:id", async ctx => {
  const { id } = ctx.params;
  ctx.body = await fakeUSers[id - 1];
});

router.post("/", async ctx => {
  const { username, password, id } = ctx.request.body;
  console.log(ctx.request.body);
  fakeUSers.push({
    username,
    password,
    id
  });
  ctx.body = fakeUSers[id - 1];
  ctx.status = 201;
});

module.exports = router;
