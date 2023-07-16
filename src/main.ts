import app from './app';
import dotenv from 'dotenv';

// TODO:-D constant env
dotenv.config();
const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
