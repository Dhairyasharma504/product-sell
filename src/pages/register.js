import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Input from '../components/elements/Input';

const Register = () => {
  const router = useRouter();
  return (
    <div
      className="bg-cover no-repeate bg-center"
      style={{ backgroundImage: `url('../images/food-restaurant.jpg')` }}
    >
      <div className="grid min-h-screen place-items-center">
        <div className=" w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow-lg ">
          <img
            className="h-12 mx-auto mb-3"
            alt="App Name"
            src="https://foodwix.zeiq.co/_next/image?url=%2Fimages%2Flogo.png&w=2048&q=75"
          />
          <h1 className="text-xl font-semibold">
            Hello there ?,{' '}
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>
          <form className="mt-6">
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <Input
                  type="text"
                  placeholder="FirstName"
                  text="first name"
                  id="firstName"
                />
              </span>
              <span className="w-1/2">
                <Input
                  type="text"
                  placeholder="LastName"
                  text="last name"
                  id="lastName"
                />
              </span>
            </div>
            <Input type="text" placeholder="Email" text="e-mail" id="email" />
            <Input type="text" placeholder="Password" text="password" />
            <Input
              type="text"
              placeholder="ConfirmPassword"
              text="confirm-password"
            />
            <div className="text-center">
              <button
                onClick={() => router.push('/dashboard')}
                type="button"
                className="w-3/4 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-yellow-500 shadow-lg focus:outline-none hover:bg-green-600 hover:shadow-none"
              >
                Sign up
              </button>
            </div>
            <Link href="/login">
              <a className="flex justify-between  mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                Already registered?
              </a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
