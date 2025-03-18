import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import { errorHandler } from './middlewares/errorHandler';
import router from './routes';

const app = new Koa();

app.use(helmet());
app.use(cors());
app.use(bodyParser());
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());

export default app; 