let router = require('koa-router')();
const page = require("./page");
const home = require("./home");

router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

module.exports = router;