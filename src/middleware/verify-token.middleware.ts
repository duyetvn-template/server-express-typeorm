import { ACCESS_TOKEN_SECRET } from 'constants/environment';
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const verifyToken: RequestHandler = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
	const token = authHeader.split(' ')[1];

	jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) return res.sendStatus(403);
		next();
	});
};

export default verifyToken;
