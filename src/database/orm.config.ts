import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	database: 'test',
	entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
};

export = config;
