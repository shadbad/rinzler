import { DataSource } from 'typeorm';
import { logger } from '../utils';

export const getAppDataSource = (() => {
  let AppDataSource: DataSource | null = null;

  return () => {
    if (AppDataSource === null) {
      logger.info('Creating app data source...');

      AppDataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: ['src/app/**/*.model.ts'],
        migrations: ['src/data/migrations/**/*.ts'],
        logging: true,
        logger: 'simple-console',
        synchronize: false,
      });
    }

    return AppDataSource;
  };
})();

const migrate = async (dataSource: DataSource): Promise<void> => {
  try {
    logger.info('Checking for app data source migrations...');
    const pending: boolean = await dataSource.showMigrations();
    if (!pending) logger.info('Found no pending migrations');
    else {
      logger.info('Found pending migrations, running...');
      await dataSource.runMigrations();
      logger.info('Migrations run successfully!');
    }
  } catch (error) {
    logger.error('Error during migration run', error);
  }
};

export const initialize = async (): Promise<void> => {
  try {
    const dataSource = getAppDataSource();
    logger.info('Initializing app data source...');
    await dataSource.initialize();
    logger.info('App data source has been initialized!');
    await migrate(dataSource);
  } catch (error) {
    logger.error('Error during app data source initialization:', error);
  }
};