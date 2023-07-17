import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	database: 'test',
	entities: ['src/**/*.entity.ts'],
	migrations: ['src/database/migrations/*.ts'],
});

export default AppDataSource;
