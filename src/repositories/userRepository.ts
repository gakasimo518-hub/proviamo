// src/repositories/userRepository.ts
import prisma from '../config/db';

export const findAllUsers = () => prisma.user.findMany();

export const findUserById = (id: number) => prisma.user.findUnique({ where: { id } });

export const findUserByEmail = (email: string) => prisma.user.findUnique({ where: { email } });

export const createUser = (data: { name: string; email: string; password: string }) =>
  prisma.user.create({ data });

export const updateUser = (id: number, data: Partial<{ name: string; email: string; password: string }>) =>
  prisma.user.update({ where: { id }, data });

export const deleteUser = (id: number) => prisma.user.delete({ where: { id } });
```

---