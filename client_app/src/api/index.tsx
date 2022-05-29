import axios from 'axios';

const base = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000';

const authBase = `${base}/api/auth`;
const userBase = `${base}/api/users`;
const orderBase = `${base}/api/orders`;
const walletBase = `${base}/api/wallet`;

export function login(payload: { email: string; password: string }) {
  return axios
    .post(authBase, payload, {
      withCredentials: true,
    })
    .then((res) => res.data);
}

export function getMe() {
  return axios
    .get(userBase, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch(() => {
      return null;
    });
}

export function getOrders() {
  return axios
    .get(orderBase + '/all', {
      withCredentials: true,
    })
    .then((res) => res.data);
}

export function getWallet() {
  return axios
    .get(walletBase + '/me', {
      withCredentials: true,
    })
    .then((res) => res.data);
}
