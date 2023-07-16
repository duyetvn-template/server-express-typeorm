import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import routes from 'configs/routes';
// import authRouter from './modules/auth/auth.route';

const app = express();

// middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.get('/*', (req, res) => {
	return res.status(404).json({
		message: 'Not found!',
	});
});

export default app;
