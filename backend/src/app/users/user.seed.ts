import { type DataSource } from 'typeorm';
import { getUserRepository } from './';
import { logger } from '../../utils';

export const seed = async (dataSource: DataSource): Promise<void> => {
  try {
    logger.info('Seeding users...');
    const repo = getUserRepository();

    await repo.create('shadbad@gmail.com', 'p@$$w0rd');
    await repo.create('s.shadbad@hotmail.com', 'p@$$w0rd');

    logger.info('Users seeded successfully!');
  } catch (error) {
    logger.error('Error during seeding users:', error);
  }
};
