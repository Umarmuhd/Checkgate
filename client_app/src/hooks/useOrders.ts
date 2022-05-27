import { getOrders } from '../api';
import { useQuery } from 'react-query';
import { Me } from 'src/context/AuthContext';

export interface OrderI {
  _id: string;
  order_id: string;
  description: string;
  total_price: number;
  user: Me;
  paid_at: Date;
}

const useOrders = () => {
  const { data, isLoading, refetch } = useQuery('orders', getOrders);

  return { ...data, isLoading, refetch };
};

export default useOrders;
