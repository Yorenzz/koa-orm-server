import 'dotenv/config';
import app from './app';
import { appConfig } from './config/app';
import logger from './utils/logger';
import { AppDataSource } from './database/connection';

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    logger.info('Database connected successfully');

    const server = app.listen(appConfig.port, () => {
      logger.info(`Server running on port ${appConfig.port}`);
    });

    return server;
  } catch (error) {
    logger.error('Error during initialization:', error);
    process.exit(1);
  }
};

export default startServer(); 