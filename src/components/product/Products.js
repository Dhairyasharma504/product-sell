import React from 'react';

import { IoMdTrash } from 'react-icons/io';
import { MdEditNote } from 'react-icons/md';
import { truncate } from 'lodash';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Heading from '../elements/Heading';
import products from '../../utils/data';

const Products = () => {
  const handleRemove = () => {
    Swal.fire({
      title: 'Do you want to delete the product?',
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          'Success!',
          'Your product is deleted successfully.',
          'success',
        );
      }
    });
  };
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {products &&
        products.map((item) => (
          <div
            key={item.name}
            className="rounded overflow-hidden border border-gray-200 hover:shadow-sm "
          >
            <div className="px-4 py-4 flex ">
              <img
                alt={item.title}
                src={item.image}
                className="aspect-square w-full rounded object-cover h-16 w-16"
              />
              <div className="flex-1 ml-4">
                <Heading className="w-full">
                  {truncate(item.title, {
                    length: 20,
                  })}
                </Heading>
                {item.description && (
                  <p className="text-sm text-gray-400 -mt-3">
                    {item.description}
                  </p>
                )}

                <div className="flex">
                  <Heading className="w-full text-primary">
                    £{item.price}
                  </Heading>
                  <div className="ml-3 flex space-x-2 items-start">
                    <Link href={`/dashboard/product/${item.id}`}>
                      <a className="text-green-400">
                        <MdEditNote className="h-6 w-6" />
                      </a>
                    </Link>
                    <button
                      onClick={handleRemove}
                      type="button"
                      className="text-red-600"
                    >
                      <IoMdTrash className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Products;
