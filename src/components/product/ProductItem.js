import React from 'react';
import Image from 'next/image';

const ProductItem = ({ product }) => (
  <div className="hover:scale-105">
    <a href="#" className="relative block ">
      {/* <button
        type="button"
        name="wishlist"
        className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button> */}

      <Image
        className="rounded-lg  "
        src={product.image}
        alt="Pizza"
        width={500}
        height={500}
      />

      <div className="p-0">
        <p className="text-sm font-medium text-gray-600">£{product.price}</p>

        <h5 className="mt-1 text-lg font-bold">{product.title}</h5>

        <button
          name="add"
          type="button"
          className="rounded-lg mt-4 flex w-full items-center justify-center  bg-yellow-500 px-8 py-4 hover:bg-teal-600 hover:text-white"
        >
          <span className="text-sm font-medium"> Add to Cart </span>

          <svg
            className="ml-1.5 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>
    </a>
  </div>
);

export default ProductItem;
