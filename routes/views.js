const Router = require("koa-router");

const router = new Router({
  prefix: "/app"
});

router.get("/", async ctx => {
  await ctx.render("index");
});

router.get("/user", async ctx => {
  await ctx.render("index", {
    headerData: { nombre: "nombre", edad: "edad", id: "id" },
    bodyData: [
      {
        nombre: "bdhsdhas",
        edad: 2232,
        id: 0
      },
      {
        nombre: "hbercfej",
        edad: 287,
        id: 1
      }
    ]
  });
});

module.exports = router;
