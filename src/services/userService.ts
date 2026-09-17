// src/services/userService.ts
import * as repo from '../repositories/userRepository';
import { AppError } from '../middleware/errorHandler';

export const getAllUsers = async () => {
  return await repo.findAllUsers();
};

export const getUserById = async (id: number) => {
  const user = await repo.findUserById(id);
  if (!user) throw { statusCode: 404, message: 'User not found' } as AppError;
  return user;
};

export const createUser = async (data: { name: string; email: string; password: string }) => {
  const existing = await repo.findUserByEmail(data.email);
  if (existing) throw { statusCode: 409, message: 'Email already in use' } as AppError;
  return await repo.createUser(data);
};

export const updateUser = async (id: number, data: Partial<{ name: string; email: string; password: string }>) => {
  const user = await repo.findUserById(id);
  if (!user) throw { statusCode: 404, message: 'User not found' } as AppError;
  return await repo.updateUser(id, data);
};

export const deleteUser = async (id: number) => {
  const user = await repo.findUserById(id);
  if (!user) throw { statusCode: 404, message: 'User not found' } as AppError;
  return await repo.deleteUser(id);
};
```

---