import { Router } from 'express';
import attachmentRouter from './employee.route';

const router = Router();

router.use('/', attachmentRouter);

export default {
  router,
};
