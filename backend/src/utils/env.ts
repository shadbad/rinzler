import dotenv from 'dotenv';
import logger from './logger';

export const loadEnvironmentVariables = (): void => {
  try {
    type Environment =
      | 'local'
      | 'development'
      | 'production'
      | 'stage'
      | 'test';

    const currentEnvironment = (process.env.NODE_ENV ?? 'local') as Environment;

    logger.info(`loading ${currentEnvironment} variables...`);

    dotenv.config({
      path: `.env${currentEnvironment === 'local' ? '' : '.' + currentEnvironment}`,
    });

    logger.info(`Environment variables loaded successfully!`);
  } catch (error) {
    logger.error('Error loading environment variables:', error);
  }
};
