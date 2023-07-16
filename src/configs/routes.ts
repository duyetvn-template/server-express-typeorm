import express from 'express';

import authRouter from '../modules/auth/auth.route';

const routes = express();

routes.use('/auth', authRouter);

export default routes;
