import React from 'react';
import Products from '../utils/data';
import ProductItem from './product/ProductItem';

const categories = ['Chicken', 'Pizza', 'Burger', 'Sandwicth'];
const Tabs = () => {
  const [openTab, setOpenTab] = React.useState('Chicken');
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row justify-center"
          role="tablist"
        >
          {categories.map((item) => (
            <li key={item} className="-mb-px mr-2 last:mr-0  text-center">
              <button
                type="button"
                className={`border text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal ${
                  openTab === item
                    ? 'text-white bg-red-600 border-red-600'
                    : 'text-red-600 bg-white border-red-600'
                }`}
                onClick={() => setOpenTab(item)}
                data-toggle="tab"
                role="tablist"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space max-w-screen-md mx-auto">
              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {Products.slice(0, 6).map((item) => (
                  <ProductItem product={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
