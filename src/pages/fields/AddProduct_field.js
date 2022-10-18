import React from 'react';
import { useRouter } from 'next/router';
import LayoutDashboard from '../../components/DashboardLayout';
import Input from '../../components/elements/Input';

const addProduct = () => {
  const router = useRouter();
  return (
    <div className="">
      <LayoutDashboard>
        <div className="p-3 max-w-screen-md mx-auto">
          <div className="mb-8">
            <img
              src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
              className="mx-auto h-64 w-50 "
              alt="photo"
            />
          </div>
          <div className="grid grid-cols-2 gap-7  items-center">
            <Input text="product-name" type="text" placeholder="product-name" />
            <Input text="price" type="text" placeholder="price" />
          </div>
          <Input
            text="contact Number"
            type="text"
            placeholder="contact Number"
          />

          <div className="text-center">
            <button
              onClick={() => router.push('/dashboard/products')}
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
};

export default addProduct;
