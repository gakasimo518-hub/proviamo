// src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import * as service from '../services/userService';
import { sendSuccess, sendError } from '../utils/responseHandler';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await