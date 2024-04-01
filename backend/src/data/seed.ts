import { getAppDataSource } from '.';
import { userSeeder } from '../app/users';
import { logger } from '../utils';

export const seed = async (): Promise<void> => {
  try {
    const dataSource = getAppDataSource();
    const seeders = [userSeeder];

    await Promise.all(
      seeders.map(async (seeder) => {
        await seeder(dataSource);
      })
    );

    logger.info('Data seeded successfully!');
  } catch (error) {
    logger.error('Error during seeding:', error);
  }
};
