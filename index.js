const { app } = require("./config/server");
const mongoose = require("mongoose");
require("dotenv").load();

const port = process.env.PORT || 3000;

(async () => {
  await mongoose.connect(process.env.DATABASE);

  if (process.env.NODE_ENV === "dev") {
    app.use(async (ctx, next) => {
      console.log(ctx.request.URL);
      await next();
    });
  }
  /*
  app.use(ctx => {
    ctx.body = "Hola mundo";
  });
*/
  app.listen(port, () => console.log(`Server on port ${port}`));
})();
