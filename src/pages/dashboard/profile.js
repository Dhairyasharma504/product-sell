import React from 'react';
import LayoutDashboard from '../../components/DashboardLayout';
import Input from '../../components/elements/Input';

const Profile = () => (
  <div className="">
    <LayoutDashboard>
      <div className="p-3 max-w-screen-md mx-auto">
        <div className="mb-8">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            className="mx-auto h-32 w-32 rounded-full hover:opacity-50"
            alt="photo"
          />
        </div>
        <div className="grid grid-cols-2 gap-7  items-center">
          <Input text="first-name" type="text" placeholder="first-name" />
          <Input text="last-name" type="text" placeholder="last-name" />
        </div>
        <Input text="contact Number" type="text" placeholder="contact Number" />
        <Input text="email" type="text" placeholder="email" />
        <Input text="business name" type="text" placeholder="business name" />
        <Input text="address-1" type="text" placeholder="address-1" />
        <Input text="address-2" type="text" placeholder="address-2" />
        <div className="text-center">
          <button
            type="button"
            className="w-3/4 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-brand hover:shadow-none"
          >
            upload
          </button>
        </div>
      </div>
    </LayoutDashboard>
  </div>
);

export default Profile;
