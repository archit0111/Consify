import express from 'express';
const router = express.Router();
import userControllers from '../controllers/userControllers';

router.post('/signup', userControllers.signup);

export default router;