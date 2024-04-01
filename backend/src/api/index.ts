import express from 'express';
import { logger } from '../utils';
import { configureMiddlewares } from './middlewares';
import { configureRoutes } from './routes';

export const start = (): void => {
  const port = process.env.PORT ?? 5000;
  const app = express();

  // TODO: secure the application
  app.disable('x-powered-by');

  configureMiddlewares(app);
  configureRoutes(app);

  app.listen(port, () => {
    logger.debug(`Server is running at http://localhost:${port}`);
  });
};
