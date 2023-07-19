import ENVIRONMENTS from 'constants/environment';
import app from './app';
import AppDataSource from 'configs/db-connect';

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!');
		// AppDataSource.runMigrations();
	})
	.catch((err) => {
		console.error('Error during Data Source initialization', err);
	});

app.listen(ENVIRONMENTS.PORT, () => {
	console.log(`Listening to port ${ENVIRONMENTS.PORT}`);
});
