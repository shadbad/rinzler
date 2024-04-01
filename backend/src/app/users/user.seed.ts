import { type DataSource } from 'typeorm';
import { User } from './user.model';
import { logger } from '../../utils';

export const seed = async (dataSource: DataSource): Promise<void> => {
  try {
    logger.info('Seeding users...');
    const repo = dataSource.getRepository(User);
    const seedUser = new User(1, 'shadbad@gmail.com', 'p@$$w0rd');
    await repo.save(seedUser);
    logger.info('Users seeded successfully!');
  } catch (error) {
    logger.error('Error during seeding users:', error);
  }
};
