import express from 'express';
import requireUser from '../../middleware/requireUser';
import { makePurchaseHandler } from '../wallet/wallet.controller';
import { getUserOrdersHandler } from './order.controller';

const router = express.Router();

router.get('/all', requireUser, getUserOrdersHandler);

router.post('/order', requireUser, makePurchaseHandler);

export default router;
