import Router from 'koa-router';
import userRouter from './user.routes';

const router = new Router({
  prefix: '/api'
});

router.use(userRouter.routes());

export default router;
