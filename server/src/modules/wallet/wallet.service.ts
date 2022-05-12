import RapydClient from '../../utils/rapydclient';
import {
  CheckoutObjectResponse,
  CreateCheckoutPageParams,
  CreateWalletParams,
  GetWalletBalanceResponse,
  TransferFundsBetweenWalletsParams,
  TransferFundsBetweenWalletsResponse,
  WalletObjectResponse,
} from '../../utils/rapydclient/types';
import { WalletModel } from './wallet.model';

const rapydClient = new RapydClient();

export async function createWallet(user_id: string) {
  const { id: rapyd_ewallet_address } = await rapydClient.post<
    WalletObjectResponse,
    CreateWalletParams
  >({
    path: '/v1/user',
    body: {
      ewallet_reference_id: user_id,
    },
  });

  return WalletModel.create({ user_id, rapyd_ewallet_address });
}

export async function getBalance(rapyd_ewallet_address: string) {
  return await rapydClient.get<Array<GetWalletBalanceResponse>>({
    path: `/v1/user/${rapyd_ewallet_address}/accounts`,
  });
}

export async function findWalletByUserId(user_id: string) {
  return WalletModel.findOne({ user_id });
}

export async function createCheckout(values: {
  e_wallet_id: string;
  user_id: string;
  amount: number;
}) {
  const { redirect_url: checkout_page_url } = await rapydClient.post<
    CheckoutObjectResponse,
    CreateCheckoutPageParams
  >({
    path: '/v1/checkout',
    body: {
      country: 'US',
      currency: 'USD',
      amount: values.amount,
      ewallet: values.e_wallet_id,
      metadata: { userId: values.user_id, msg: '' },
    },
  });

  return checkout_page_url;
}

export async function transferWallet({
  sender_id,
  sender_wallet,
  receiver_id,
  receiver_wallet,
  amount,
  info,
}: {
  sender_id: string;
  sender_wallet: string;
  receiver_id: string;
  receiver_wallet: string;
  amount: number;
  info: string;
}) {
  const metadata = {
    senderUserId: sender_id,
    recipientUserId: receiver_id,
    msg: info,
  };

  const { id: pending_transaction_id } = await rapydClient.post<
    TransferFundsBetweenWalletsResponse,
    TransferFundsBetweenWalletsParams
  >({
    path: '/v1/account/transfer',
    body: {
      currency: 'USD',
      amount,
      source_ewallet: sender_wallet,
      destination_ewallet: receiver_wallet,
      metadata,
    },
  });

  return pending_transaction_id;
}
