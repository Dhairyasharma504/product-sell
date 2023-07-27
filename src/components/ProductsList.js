import React from 'react';
// import { IoMdTrash } from 'react-icons/io';
// import { MdEditNote } from 'react-icons/md';
// import { AiOutlineEye } from 'react-icons/ai';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Image from 'next/image';
import TableHead from './elements/TableHead';

const ProductsList = ({ products }) => {
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
  console.log(handleRemove, 'handleRemove');
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500">
        <TableHead
          tableHead={[
            'Product Name',
            'Price',
            'Updated At',
            'Status',
            'Image',
            // 'Actions',
          ]}
        />
        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.name}
                <span className="font-medium px-3 text-gray-900">
                  (company-Name)
                </span>{' '}
                <span>size</span>
              </th>
              <td className="py-4 px-6">₹ {item.price}</td>
              <td className="py-4 px-6">{item.updatedAt}</td>
              <td className="py-4 px-6 capitalize">
                {item.status === 'nonActive' && (
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    {item.status}
                  </span>
                )}
                {item.status === 'active' && (
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    {item.status}
                  </span>
                )}
              </td>
              {/* <td>
                <div className="ml-3 flex space-x-2 items-start">
                  <Link href={`/dashboard/product/${item.id}`}>
                    <a className="text-green-500">
                      <AiOutlineEye className="h-6 w-6" />
                    </a>
                  </Link>
                  <Link href={`/dashboard/product/${item.id}`}>
                    <a className="text-blue-600">
                      <MdEditNote className="h-6 w-6" />
                    </a>
                  </Link>
                  <button
                    onClick={handleRemove}
                    type="button"
                    className="text-red-500"
                  >
                    <IoMdTrash className="h-5 w-5" />
                  </button>
                </div>
              </td> */}
              <td>
                <div className=" flex space-x-2 items-start">
                  <div className=" p-4 ">
                    <Link href="/auth/profile">
                      <Image
                        src="/images/food-restaurant.jpg"
                        width={200}
                        height={130}
                        alt="Picture of the author"
                      />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsList;
