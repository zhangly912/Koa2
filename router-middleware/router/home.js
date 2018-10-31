
let home = require('koa-router')();
home.get('/', async (ctx) => {
    let html = `
    <ul>
    <li><a href="/page/helloworld">/page/helloworld</a></li>
    <li><a href="/page/404">/page/404</a></li>
    <li><a href="/page/info">/page/info</a></li>
    </ul>
`
    ctx.body = html
});
module.exports = home;
