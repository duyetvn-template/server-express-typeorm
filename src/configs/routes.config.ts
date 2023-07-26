import express from 'express';
import sortMiddleware from 'middlewares/sort.middleware';
import authRouter from 'modules/auth/auth.route';

const routes = express.Router();

routes.use('/auth', sortMiddleware, authRouter);

export default routes;
