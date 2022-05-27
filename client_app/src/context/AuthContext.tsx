import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NEXT_URL } from 'src/config/index';
import { RefetchOptions, RefetchQueryFilters, useQuery } from 'react-query';
import { getMe } from '../api';

export interface Me {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
}

const AuthContext = createContext<{
  user: Me;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => any;
  // @ts-ignore
}>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, refetch } = useQuery('me', getMe);

  return (
    <AuthContext.Provider value={{ user: data, refetch }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};

const useMe = () => useContext(AuthContext);

export { AuthContext, useMe };
