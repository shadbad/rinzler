import { loadEnvironmentVariables, logger } from './utils';
import { start as initializeServer } from './api';
import { initialize as initializeDB } from './data';

loadEnvironmentVariables();

initializeDB()
  .then(() => {
    initializeServer();
  })
  .catch((error) => {
    logger.error('Error during application bootstrap:', error);
  });
