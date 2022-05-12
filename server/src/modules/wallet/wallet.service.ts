import RapydClient from '../../utils/rapydclient';
import {
  CreateWalletParams,
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
