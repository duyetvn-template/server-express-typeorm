import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	database: 'wms',
	entities: ['src/**/*.entity.ts'],
});

export default AppDataSource;
