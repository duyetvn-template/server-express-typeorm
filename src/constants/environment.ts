import 'dotenv/config';

const ENVIRONMENTS = {
	PORT: process.env.PORT || 8002,
	ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'secret',
};

export default ENVIRONMENTS;
