import React from 'react';
// import { IoMdTrash } from 'react-icons/io';
// import { MdEditNote } from 'react-icons/md';
// import { AiOutlineEye } from 'react-icons/ai';

import TableHead from './elements/TableHead';
import ProductItem from './ProductItem';

const ProductsList = ({ products }) => (
  // const handleRemove = () => {
  //   Swal.fire({
  //     title: 'Do you want to delete the product?',
  //     icon: 'question',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes',
  //     denyButtonText: `No`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Success!',
  //         'Your product is deleted successfully.',
  //         'success',
  //       );
  //     }
  //   });
  // };

  <div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500">
      <TableHead
        tableHead={[
          'Product Name',
          'Company',
          'Updated At',
          'Status',
          'Variant',
          'Price',
          'Image',
        ]}
      />
      <tbody>
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  </div>
);
export default ProductsList;
