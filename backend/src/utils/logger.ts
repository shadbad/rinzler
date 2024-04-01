import winston, { addColors } from 'winston';

addColors({
  error: 'bold red',
  warn: 'italic yellow',
  info: 'gray',
  db: 'green',
  http: 'blue',
  debug: 'magenta',
  silly: 'rainbow',
});

const logger = winston.createLogger({
  level: 'info',
  levels: { error: 0, warn: 1, info: 2, db: 3, http: 4, debug: 5, silly: 6 },
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
  info: (message: unknown) => logger.info(message?.toString() ?? ''),
  http: (message: unknown) => logger.http(message?.toString() ?? ''),
  error: (message: unknown, error: unknown) =>
    logger.error(message?.toString() ?? '', error),
  warn: (message: unknown) => logger.warn(message?.toString() ?? ''),
  debug: (message: unknown) => logger.debug(message?.toString() ?? ''),
  silly: (message: unknown) => logger.silly(message?.toString() ?? ''),
  db: (message: unknown) => logger.log('db', message?.toString() ?? ''),
};
