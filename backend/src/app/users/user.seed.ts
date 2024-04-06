import { type DataSource } from 'typeorm';
import { User } from './user.model';
import { logger, hash } from '../../utils';

export const seed = async (dataSource: DataSource): Promise<void> => {
  try {
    logger.info('Seeding users...');
    const repo = dataSource.getRepository(User);

    const { hashedValue, salt } = hash('p@$$w0rd');

    const seedUser = new User(1, 'shadbad@gmail.com', hashedValue, salt);
    await repo.save(seedUser);
    logger.info('Users seeded successfully!');
  } catch (error) {
    logger.error('Error during seeding users:', error);
  }
};
