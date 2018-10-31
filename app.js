const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
app.on('error', err => {
    log.error('server error', err)
  });


app.use(async ctx => {
    ctx.body = 'Hello World';
  });
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
