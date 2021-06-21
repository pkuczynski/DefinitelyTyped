import Koa = require('koa');
import bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.use((ctx) => {
    // $ExpectType unknown
    ctx.request.body;

    // $ExpectError
    ctx.request.body.a;
});

app.listen(80);
