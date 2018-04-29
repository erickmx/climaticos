/**
 * Function to handle the erros that occur during the excecution
 * @returns {Function: compose.Middleware<Context>}
 */
module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      console.error(error);
      ctx.status = error.status || 500;
      ctx.body = error.message;
    }
  };
};
