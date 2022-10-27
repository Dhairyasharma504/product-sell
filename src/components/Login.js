import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Input from './elements/Input';
import Button from './elements/Button';

const login = () => {
  const router = useRouter();
  return (
    <div>
      <div
        className="bg-cover no-repeate bg-center"
        style={{ backgroundImage: `url('../images/food-restaurant.jpg')` }}
      >
        <div className="grid min-h-screen place-items-center ">
          <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow-lg">
            {/* <h1 className="font-medium text-2xl mt-3 text-center">Login</h1> */}
            <Link href="/">
              <img
                className="h-12 mx-auto mb-3"
                alt="App Name"
                src="https://foodwix.zeiq.co/_next/image?url=%2Fimages%2Flogo.png&w=2048&q=75"
              />
            </Link>
            <form action="" className="mt-6">
              <div className="my-5">
                <Input
                  text="username/mobile-no"
                  type="text"
                  placeholder="username"
                />
              </div>
              <div className="mt-5">
                <Input text="password" type="text" placeholder="password" />
                <div className="flex justify-end mt-2 text-xs text-gray-600">
                  <Link href="/auth/forgot-password">
                    <a className="ml-2 font-bold text-xs text-black cursor-pointer hover:underline">
                      forget Password
                    </a>
                  </Link>
                </div>
              </div>
              <Button onClick={() => router.push('/dashboard')}>login</Button>
            </form>

            <p className="mt-4 flex text-xs text-center justify-center font-light text-black ">
              Don&apos;t have an account?
              <Link href="/auth/register">
                <a className="ml-2 font-bold text-xs text-black cursor-pointer hover:underline">
                  create one
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
