import { getOrders } from '../api';
import { useQuery } from 'react-query';

const useOrders = () => {
  const { data, isLoading, refetch } = useQuery('orders', getOrders);

  return { ...data, isLoading, refetch };
};

export default useOrders;
