const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// 定义 /demo 路由
router.get('/api/demo', (ctx) => {
    ctx.body = '你好 jimmy';
});
// 使用路由
app.use(router.routes()).use(router.allowedMethods());
// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Koa server is running at http://localhost:${PORT}`);
});