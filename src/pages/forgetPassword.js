import React from 'react';
import Link from 'next/link';
import Input from '../components/elements/Input';

const forgetPassword = () => (
  <div>
    <div
      className="bg-cover no-repeate bg-center"
      style={{ backgroundImage: `url('../images/food-restaurant.jpg')` }}
    >
      <div className="grid min-h-screen place-items-center ">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow-lg">
          {/* <h1 className="font-medium text-2xl mt-3 text-center">Login</h1> */}
          <img
            className="h-12 mx-auto mb-3"
            alt="App Name"
            src="https://foodwix.zeiq.co/_next/image?url=%2Fimages%2Flogo.png&w=2048&q=75"
          />
          <div className="px-8 mb-4 text-center ">
            <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
            <p className="mb-4 text-sm text-gray-700">
              We get it, stuff happens. Just enter your email address below and
              we&aposll send you a link to reset your password!
            </p>
          </div>
          <form action="" className="mt-10">
            <div className="my-5">
              <Input
                text="Enter email address"
                type="text"
                placeholder="Enter email address"
              />
            </div>
            <div className="mt-5" />
            <div className="text-center">
              <button
                type="submit"
                className="w-3/4 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-yellow-500 shadow-lg focus:outline-none hover:bg-teal-600 hover:shadow-none"
              >
                reset password
              </button>
            </div>
          </form>

          <div className="mt-5 text-center  ">
            <Link href="/login">
              <a className="ml-2 font-bold text-xs text-black cursor-pointer hover:underline">
                Already have an account? Login!
              </a>
            </Link>

            <Link href="/register">
              <a className="ml-2 font-bold text-xs text-black cursor-pointer hover:underline">
                Create an Account!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default forgetPassword;
