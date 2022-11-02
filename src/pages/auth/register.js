import React from 'react';

import { useRouter } from 'next/router';

import Signup from '../../components/forms/Signup';

const Register = () => {
  const router = useRouter();
  return (
    <div
      className="bg-cover no-repeate bg-center"
      style={{ backgroundImage: `url('../images/food-restaurant.jpg')` }}
    >
      <div className="grid min-h-screen place-items-center">
        <div className=" w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow-lg rounded-md ">
          <img
            className="h-12 mx-auto mb-3"
            alt="App Name"
            src="../images/logo.webp"
          />

          <h4 className="font-normal">
            please fill in your information to continue
          </h4>

          <Signup onSubmit={() => router.push('/dashboard')} />
        </div>
      </div>
    </div>
  );
};
export default Register;
