import React from 'react';
import LayoutDashboard from '../../components/DashboardLayout';
import Input from '../../components/elements/Input';

const Profile = () => (
  <div className="">
    <LayoutDashboard>
      <div className="p-3">
        <div className="mb-4 ">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            className=" h-40 w-40 rounded-full hover:opacity-50"
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
      </div>
    </LayoutDashboard>
  </div>
);

export default Profile;
