import pool from '../config/database';
import { User } from '../models/user';

export const findAllUsers = async (): Promise<User[]> => {
  const res = await pool.query<User>('SELECT * FROM users ORDER BY id');
  return res.rows;
};

export const findUserById = async (id: number): Promise<User | null> => {
  const res = await pool.query<User>('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0] || null;
};

export const createUser = async (name: string, email: string): Promise<User>