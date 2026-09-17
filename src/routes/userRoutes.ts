import { Router } from 'express';
import {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';
import { body, param } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';

const router = Router();

router.get('/', listUsers);

router.get(
  '/:id',
  param('id').isInt().withMessage('ID must be an integer'),
  validateRequest,
  getUser
);

router.post(
  '/',
  body('email').isEmail().withMessage('Valid email required'),
  body('name').optional().isString(),
  validateRequest,
  createUser
);

router.put(
  '/:id',
  param('id').isInt(),
  body('email').optional().isEmail(),
  body('name').optional().isString(),
  validateRequest,
  updateUser
);

router.delete(
  '/:id',
  param('id').isInt(),
  validateRequest,
  deleteUser
);

export default router;
```

---