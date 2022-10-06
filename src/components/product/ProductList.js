import React from 'react';
import Container from '../Container';

import ProductItem from './ProductItem';

const Products = [
  {
    id: 1,
    title: 'My Product',
    price: 14,
    image: '/images/Pizza.jpg',
    href: ''
  },
  {
    id: 2,
    title: 'My Product',
    price: 14,
    image: '/images/Pizza.jpg',
    href: ''
  },
  {
    id: 3,
    title: 'My Product',
    price: 14,
    image: '/images/Pizza.jpg',
    href: ''
  },
  {
    id: 4,
    title: 'My Product',
    price: 14,
    image: '/images/Pizza.jpg',
    href: ''
  },
  {
    id: 5,
    title: 'My Product',
    price: 14,
    image: '/images/Pizza.jpg',
    href: ''
  },
  {
    id: 6,
    title: 'My Product',
    price: 14,
    image: '/images/Pizza.jpg',
    href: ''
  },

  {
    id: 7,
    title: 'My Product',
    price: 14,
    image: '/images/Pizza.jpg',
    href: ''
  },
  {
    id: 8,
    title: 'My Product',
    price: 14,
    image: '/images/Pizza.jpg',
    href: ''
  }
];
const ProductList = () => (
  <Container>
    <div className="relative mx-auto max-w-3xl text-center">
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10" />

      <h2 className="relative inline-block bg-white px-4 text-center text-2xl font-bold">
        Products
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      {Products.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>

    {/* <div className="mt-4 text-center">
        <button type="button" className="text-xs text-gray-500 underline">
          Clear Recently Viewed
        </button>
      </div> */}
  </Container>
);

export default ProductList;
