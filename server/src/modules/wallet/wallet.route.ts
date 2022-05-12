import express from 'express';
import requireUser from '../../middleware/requireUser';
import {
  getUserWalletBalance,
  topUpWalletHandler,
  transferByEmailHandler,
} from './wallet.controller';

const router = express.Router();

router.get('/me', requireUser, getUserWalletBalance);

router.post('/deposit', requireUser, topUpWalletHandler);

router.post('/transfer/email', requireUser, transferByEmailHandler);

export default router;
