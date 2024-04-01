import morgan from 'morgan';
import { logger } from '../../utils';

export const httpLogger = morgan(
  '[:method] :url status(:status) :response-time ms',
  {
    stream: {
      write: (message: string) => logger.http(message.trim()),
    },
  }
);
