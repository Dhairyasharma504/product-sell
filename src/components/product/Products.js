import React from 'react';

import { IoMdTrash } from 'react-icons/io';
import { MdEditNote } from 'react-icons/md';

import Heading from '../elements/Heading';

import products from '../../utils/data';

const Products = () => (
  <div className="grid grid-cols-3 gap-6">
    {products &&
      products.map((item) => (
        <div
          key={item.name}
          className="rounded overflow-hidden border border-gray-200 "
        >
          <div className="px-4 py-4 flex ">
            <img
              alt={item.title}
              src={item.image}
              className="aspect-square w-full rounded object-cover h-16 w-16"
            />
            <div className="flex-1 ml-4">
              <Heading className="w-full">{item.title}</Heading>
              <div className="flex">
                <Heading className="w-full text-primary">£{item.price}</Heading>
                <div className="ml-3 flex space-x-2 items-start">
                  <button type="button" className="text-green-400">
                    <MdEditNote
                      className="h-6 w-6"
                      onClick={() => {
                        console.log('edit');
                      }}
                    />
                  </button>
                  <button type="button" className="text-red-600">
                    <IoMdTrash
                      className="h-5 w-5"
                      onClick={() => console.log('remove')}
                    />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        </div>
      ))}
  </div>
);
export default Products;
