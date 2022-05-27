import axios from 'axios';

const base = process.env.NEXT_PUBLIC_API_ENDPOINT;

const authBase = `${base}/api/auth`;
const userBase = `${base}/api/users`;

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
