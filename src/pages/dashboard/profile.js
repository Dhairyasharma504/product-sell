import React from 'react';
import LayoutDashboard from '../../components/DashboardLayout';
import Input from '../../components/elements/Input';

const Profile = () => (
  <div className="">
    <LayoutDashboard>
      <div className="p-3">
        <div className="flex space-x-6">
          <Input text="first-name" type="text" placeholder="first-name" />{' '}
          <Input text="last-name" type="text" placeholder="last-name" />{' '}
        </div>
        <Input text="contact Number" type="text" placeholder="contact Number" />
        <Input text="email" type="text" placeholder="email" />
        <Input text="address-1" type="text" placeholder="address-1" />
        <Input text="address-2" type="text" placeholder="address-2" />
      </div>
    </LayoutDashboard>
  </div>
);

export default Profile;
