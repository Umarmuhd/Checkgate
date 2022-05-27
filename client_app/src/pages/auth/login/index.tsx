import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NEXT_URL } from 'src/config/index';
import toast from 'react-hot-toast';
import axios from 'axios';

import { login } from 'src/api';

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin: SubmitHandler<Inputs> = async (values: {
    email: string;
    password: string;
  }) => {
    const { email, password } = values;

    try {
      setLoading(true);
      const { data } = await login({ email, password });
      console.log(data);
      toast.success('Login success!');
      setLoading(false);
      router.push('/dashboard');
      return;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
          <a href="#" className="p-4 text-xl font-bold text-white bg-black">
            Design.
          </a>
        </div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center font-head">
            Hi 👋. Welcome back !
          </p>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col pt-3 md:pt-8"
          >
            <div className="flex flex-col pt-4">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm font-medium block mb-2 text-left opacity-80"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full px-3 py-1 focus:outline-none focus:ring h-12"
                  placeholder="example@email.com"
                  {...register('email', { required: true })}
                />
                {errors.email?.type === 'required' && (
                  <p className="text-left text-red-600 text-xs mt-1">
                    Email address is required
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="relative">
                <label
                  htmlFor="password"
                  className="text-sm font-medium block mb-2 text-left opacity-80"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full py-1 px-3 focus:outline-none focus:ring h-12"
                  {...register('password', { required: true, minLength: 6 })}
                />
                {errors?.password ? (
                  <p className="text-left text-red-600 text-xs mt-1">
                    Password is required
                  </p>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="py-1 border-primary border w-full text-center bg-primary text-white text-sm h-12"
              disabled={loading}
            >
              {loading ? '...' : <span>Login in to your account</span>}
            </button>
          </form>
          <div className="pt-12 pb-12 text-center">
            <p>
              Don&#x27;t have an account?
              <Link href="/auth/register">
                <a className="ml-1 font-semibold underline text-primary">
                  Register here.
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 shadow-2xl min-h-screen">
        <img
          className="hidden object-cover w-full h-screen md:block"
          src="https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
        />
      </div>
    </div>
  );
}
