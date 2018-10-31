
const Koa = require("koa");
const loggerAsync = require("./logger-async");
const app = new Koa();
app.use(loggerAsync());
app.use(async (ctx)=>{
    ctx.body = 'hello world';
});
app.listen(3000)
console.log('the server is starting at port 3000');
