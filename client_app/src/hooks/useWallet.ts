import { getWallet } from '../api';
import { useQuery } from 'react-query';

export interface WalletI {
  _id: string;
  wallet_id: string;
}

const useWallet = () => {
  const { data, isLoading, refetch } = useQuery('wallet', getWallet);

  return { ...data, isLoading, refetch };
};

export default useWallet;
