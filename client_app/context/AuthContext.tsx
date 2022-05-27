import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NEXT_URL } from '../config/index';
import { RefetchOptions, RefetchQueryFilters, useQuery } from 'react-query';
import { getMe } from '../api';

interface Me {
  _id: string;
  email: string;
  username: string;
}

const AuthContext = createContext<{
  user: Me | null;
  refresh: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => any;
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
