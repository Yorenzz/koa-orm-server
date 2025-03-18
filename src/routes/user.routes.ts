import Router from 'koa-router';
// import { healthCheck } from '@/controllers/user.controller';
import { addUser, getUser } from '../controllers/user.controller';

const router = new Router({
  prefix: '/user'
});

router.post('/add_user', addUser);
router.get('/get_user', getUser);
export default router;
