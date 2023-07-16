import express from 'express';

const authRouter = express.Router();

authRouter.get('/register', (req, res) => {
	res.json({
		message: 'register',
	});
});

authRouter.get('/login', (req, res) => {
	res.json({
		message: 'login',
	});
});

export default authRouter;
