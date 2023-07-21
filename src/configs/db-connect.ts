import "reflect-metadata"
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	database: 'test',
	entities: ['src/modules/**/*.entity.ts'],
	migrations: ['src/database/migrations/*.ts'],
});

export default AppDataSource;
