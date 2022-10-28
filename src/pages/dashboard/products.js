import React from 'react';

import { useRouter } from 'next/router';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import LayoutDashboard from '../../components/DashboardLayout';
import ProductsList from '../../components/product/Products';

const products = [
  {
    name: 'Apple',
    price: 100,
  },
  {
    name: 'pizza',
    price: 370,
  },
  {
    name: 'Burger',
    price: 310,
  },
  {
    name: 'salad',
    price: 50,
  },
  {
    name: 'Noodle',
    price: 370,
  },
  {
    name: 'Pasta',
    price: 310,
  },
  {
    name: 'Chicken',
    price: 350,
  },
  {
    name: 'Salmon',
    price: 450,
  },
  {
    name: 'Salmon',
    price: 50,
  },
];

const Products = () => {
  const router = useRouter();
  return (
    <div>
      <LayoutDashboard>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-semibold">Products</p>
          </div>
          <div className="text-right">
            <button
              onClick={() => router.push('/dashboard/add-product')}
              type="button"
              className="p-3 font-medium tracking-widest text-white  bg-black shadow-lg focus:outline-none hover:bg-brand hover:shadow-none"
            >
              <span className="flex items-center">
                <MdOutlineAddCircleOutline className="h-5 w-5 mr-2" />
                Create Product
              </span>
            </button>
          </div>
        </div>

        <ProductsList products={products} />
      </LayoutDashboard>
    </div>
  );
};
export default Products;
