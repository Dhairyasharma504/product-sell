import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginForm from '../components/forms/LoginForm';

const index = () => {
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
            <LoginForm onSubmit={() => router.push('/dashboard')} />

            <p className="mt-4 flex text-xs text-center justify-center font-light text-black ">
              Don&apos;t have an account?
              <Link href="/auth/register">
                <a className="ml-2 font-bold text-xs text-black cursor-pointer hover:underline">
                  Create one?
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
