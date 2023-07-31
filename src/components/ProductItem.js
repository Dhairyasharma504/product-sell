import React, { useState } from 'react';
import { find } from 'lodash';
import dayjs from 'dayjs';
// import SanityImage from './elements/SanityImage';
import Image from 'next/image';

const ProductItem = ({ item }) => {
  const [variant, setVariant] = useState(item.variants[0] || null);
  console.log('variant?.images?.asset', variant?.image);
  return (
    <tr
      key={item.id}
      className="odd:bg-white even:bg-slate-50 border-b border-gray-200 "
    >
      <th
        scope="row"
        className="py-4 px-6 capitalize font-medium text-gray-900 whitespace-nowrap"
      >
        {item.name}
      </th>
      <th
        scope="row"
        className="py-4 px-6 font-medium capitalize text-gray-900 whitespace-nowrap"
      >
        {item.companyname}
      </th>
      <td className="py-4 px-6 ">
        <time
          dateTime={dayjs(item._createdAt).format('DD-MM-YYYY')}
          className="block text-xs text-gray-500"
        >
          {`${dayjs(item._createdAt).format('D')}th ${dayjs(
            item._createdAt,
          ).format('MMM YYYY')}`}
        </time>
      </td>
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
      <td className="py-4 px-6 capitalize">
        <select
          defaultValue={`${variant?.title} ${
            variant?.type ? `- ${variant?.type}` : ''
          }`}
          onChange={(e) => {
            const res = find(item.variants, { _key: e.target.value });
            setVariant(res);
          }}
        >
          {item.variants?.map((variantItem) => (
            <option value={variantItem._key}>
              {variantItem.title}{' '}
              {variantItem?.type ? `- ${variantItem?.type}` : ''}
            </option>
          ))}
        </select>
      </td>
      <td>Rs. {variant.price} /-</td>

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
          {variant?.image && (
            <div className=" p-4 ">
              <Image
                src={variant.image}
                width={200}
                height={130}
                alt={`${item?.name} ${
                  variant?.title ? `- ${variant?.title}` : ''
                }`}
              />
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};
export default ProductItem;
