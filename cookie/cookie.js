const Koa = require("koa");
const app = new Koa();

/**
 * 可以在控制台的cookie列表中中看到写在页面上的cookie
    在控制台的console中使用document.cookie可以打印出在页面的所有cookie（
    需要是httpOnly设置false才能显示）
 */
app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set('cid', 'hello world', {
            domain: 'localhost',//写cookie所在的域名
            path: '/index',//写cookie所在的路径
            maxAge: 10 * 60 * 1000,//cookie有效时长
            expires: new Date('2018-11-2'),//cookie失效时间
            httpOnly: false,//是否用于http请求中获取
            overwrite: false,//是否允许重写
        });
        let cid = ctx.cookies.get("cid");
        ctx.body = 'cookie is ' + cid;
    } else {
        ctx.body = 'hello world';
    }
});
app.listen(3000, () => {
    console.log('[demo] cookie is starting at port 3000')
});