import { User } from '../models/User';
import { AppDataSource } from '../database/connection';

const userRepository = AppDataSource.getRepository(User);

export class UserService {
  async findAll() {
    return await userRepository.find();
  }

  async findById(id: string) {
    return await userRepository.findOne({ where: { id } });
  }
} 