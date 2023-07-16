import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';

const register: RequestHandler = async (req, res) => {
	const { user, password } = req.body;
	if (!user || !password)
		return res
			.status(400)
			.json({ message: 'Username and password are required.' });

	// check for duplicate usernames in the db
	// const duplicate = await User.findOne({ username: user }).exec();
	// if (duplicate) return res.sendStatus(409); //Conflict

	try {
		//encrypt the password
		const hashedPwd = await bcrypt.hash(password, 10);

		//create and store the new user
		// const result = await User.create({
		// 	username: user,
		// 	password: hashedPwd,
		// });

		res.status(201).json({ success: `New user ${user} created!` });
	} catch (err: any) {
		res.status(500).json({ message: err.message });
	}
};

const login: RequestHandler = (req, res) => {
	res.json({
		message: 'login',
	});
};

const authController = { register, login };

export default authController;
