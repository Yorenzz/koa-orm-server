import { DataSource } from 'typeorm';
import { dbConfig } from '../config/database';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  entities: [__dirname + '/../models/*.{js,ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  subscribers: [__dirname + '/subscribers/*.{js,ts}']
}); 