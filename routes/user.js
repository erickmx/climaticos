const Router = require("koa-router");
const User = require("../models/user.model");

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

router.get("/", async ctx => await (ctx.body = await User.find()));

router.get("/:id", async ctx => {
  const { id } = ctx.params;
  ctx.body = await User.findById(id);
});

router.post("/", async ctx => {
  const { fistName, lastName, email, password } = ctx.request.body;
  console.log(ctx.request.body);
  const newUser = new User({
    fistName,
    lastName,
    email,
    password
  });
  ctx.body = await newUser.save();
  ctx.status = 201;
});

router.put("/:id", async ctx => {
  const { id } = ctx.params;
  const { fistName, lastName, email, password } = ctx.request.body;
  ctx.body = await User.findByIdAndUpdate(id, {
    fistName,
    lastName,
    email,
    password
  });
});

router.delete("/:id", async ctx => {
  const { id } = ctx.params;
  ctx.body = await User.findByIdAndRemove(id);
});

module.exports = router;
