import express from 'express';
import sortMiddleware from 'middleware/sort.middleware';
import authRouter from 'modules/auth/auth.route';

const routes = express();

routes.use('/auth', sortMiddleware, authRouter);

export default routes;
