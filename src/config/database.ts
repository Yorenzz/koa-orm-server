import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  host: process.env.DB_HOST || '154.196.245.64',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'TYfrontend@2024',
  database: process.env.DB_DATABASE || 'root',
}; 