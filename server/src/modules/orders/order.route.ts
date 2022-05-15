import express from 'express';
import requireUser from '../../middleware/requireUser';
import { getUserOrdersHandler } from './order.controller';

const router = express.Router();

router.get('/all', requireUser, getUserOrdersHandler);

export default router;
