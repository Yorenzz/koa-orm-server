import { AppDataSource } from '@/database/connection';
import { User } from '@/models/User';
import logger from '../utils/logger';
import { Context } from 'koa';

export const addUser = async (ctx: Context) => {
  ctx.status = 200;
  const { name, email, password } = ctx.request.body as { name: string, email: string, password: string };

  try {
    const userRepository = AppDataSource.getRepository(User);

    const newUser = userRepository.create({
      name,
      email,
      password
    });

    await userRepository.save(newUser);

    ctx.body = {
      success: true,
      data: newUser
    };
  } catch (error) {
    logger.error('创建用户失败:', error);
    ctx.status = 500;
    ctx.body = {
      success: false,
      message: '创建用户失败'
    };
    return;
  }
};

export const getUser = async (ctx: Context) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    ctx.status = 200;
    ctx.body = {
      success: true,
      data: users
    };
  } catch (error) {
    logger.error('查询用户失败:', error);
    ctx.status = 500;
    ctx.body = {
      success: false,
      message: '查询用户失败'
    };
    return;
  }
};
