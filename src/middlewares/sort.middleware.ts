import { RequestHandler } from 'express';

const sortMiddleware: RequestHandler = (req, res, next) => {
	res.locals.hello = 'world';

	console.log(req.query);

	next();
};

export default sortMiddleware;
