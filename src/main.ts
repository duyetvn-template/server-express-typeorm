import { PORT } from 'constants/environment';
import app from './app';

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
