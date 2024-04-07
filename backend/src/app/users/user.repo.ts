import { type FindManyOptions, type Repository } from 'typeorm';
import { getAppDataSource } from '../../data';
import { logger, hash } from '../../utils';
import { User } from './';

class UserRepository {
  constructor() {
    this.repository = getAppDataSource().getRepository(User);
  }

  private readonly repository: Repository<User>;

  async create(userName: string, password: string): Promise<User> {
    try {
      const _user = await this.getByUserName(userName);

      if (_user !== null) {
        logger.info(`User ${userName} already exists`);
        return _user;
      }

      const { hashedValue, salt } = hash(password);

      const user: User = await this.repository.save({
        userName,
        password: hashedValue,
        salt,
      });

      logger.info(`User ${user?.userName} created/updated successfully`);

      return user;
    } catch (error) {
      logger.error('Error creating user', error);
      throw error;
    }
  }

  async get(skip: number = 0, take: number = 0): Promise<User[]> {
    try {
      const options: FindManyOptions = {};

      if (take !== 0) {
        options.take = take;
        options.skip = skip;
        options.order = { id: 'ASC' };
      }

      const users = await this.repository.find(options);

      return users;
    } catch (error) {
      logger.error('Error getting users', error);
      throw error;
    }
  }

  async getById(id: number): Promise<User | null> {
    try {
      return await this.repository.findOne({
        where: { id },
      });
    } catch (error) {
      logger.error(`Error getting user by id: ${id}`, error);
      throw error;
    }
  }

  async getByUserName(userName: string): Promise<User | null> {
    try {
      return await this.repository.findOne({
        where: { userName },
      });
    } catch (error) {
      logger.error(`Error getting user by userName: ${userName}`, error);
      throw error;
    }
  }

  async update(updatedUser: User): Promise<User> {
    try {
      return await this.repository.save(updatedUser);
    } catch (error) {
      logger.error(`Error updating user: ${updatedUser.id}`, error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.repository.delete(id);
      return true;
    } catch (error) {
      logger.error(`Error deleting user: ${id}`, error);
      return false;
    }
  }
}

export const getUserRepository = (() => {
  let userRepository: UserRepository | null = null;

  return () => {
    if (userRepository === null) userRepository = new UserRepository();

    return userRepository;
  };
})();
