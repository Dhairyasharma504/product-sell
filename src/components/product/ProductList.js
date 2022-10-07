import React from 'react';
import Link from 'next/link';
import Container from '../Container';
import Products from '../../utils/data';
import ProductItem from './ProductItem';

const ProductList = () => (
  <Container>
    <div className="relative mx-auto max-w-3xl text-center">
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-teal-600/100" />

      <h2 className="relative inline-block bg-white px-4 text-center text-2xl font-bold">
        New Arrivals
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      {Products.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>

    <div className=" my-14 text-center">
      <Link href="/products">
        <a
          type="button"
          className=" cursor-pointer text-xl inline-block rounded-lg border border-teal-600 px-12 py-3  font-medium text-teal-600 hover:bg-teal-600 hover:text-white focus:outline-none active:bg-teal-600"
        >
          View All →
        </a>
      </Link>
    </div>
  </Container>
);

export default ProductList;
