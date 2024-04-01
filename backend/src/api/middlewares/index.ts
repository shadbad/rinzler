import type express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { httpLogger } from './http-logger';

export const configureMiddlewares = (app: express.Application): void => {
  app.use(helmet());
  app.use(httpLogger);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
