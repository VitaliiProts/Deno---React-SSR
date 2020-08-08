import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { page } from './page.tsx';

const app = new Application();
const router = new Router();

router.get('/items', (ctx) => {
  ctx.response.body = page({})
});

app.use(router.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = "Page not found!";
});

await app.listen({ port: 8000 });