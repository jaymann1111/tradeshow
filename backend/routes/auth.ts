import express from 'express';
import { registerAdmin, loginAdmin, dashboard } from '../controllers/authController';

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/dashboard', dashboard);

export default router;
