import winston, { addColors } from 'winston';

addColors({
  error: 'bold red',
  warn: 'italic yellow',
  info: 'gray',
  debug: 'bold italic magenta',
  http: 'blue',
  silly: 'rainbow',
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {},
  transports: [
    new winston.transports.Console({
      level: 'silly',
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    }),
  ],
});

export default {
  info: (message: string) => logger.info(message),
  http: (message: string) => logger.http(message),
  error: (message: string, error: unknown) => logger.error(message, error),
  warn: (message: string) => logger.warn(message),
  debug: (message: string) => logger.debug(message),
  silly: (message: string) => logger.silly(message),
};
