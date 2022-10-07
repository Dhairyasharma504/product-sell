import React from 'react';
import ProductFilter from '../components/product/ProductFilter';
import ProductItem from '../components/product/ProductItem';
import Products from '../utils/data';
import Layout from '../components/Layout';

const products = () => (
  <Layout>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <ProductFilter />
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="hidden sm:inline"> Showing </span>
                {Products.length} Products
              </p>

              <div className="ml-4">
                <label htmlFor="SortBy" className="sr-only">
                  {' '}
                  Sort{' '}
                </label>

                <select
                  id="SortBy"
                  name="sort_by"
                  className="rounded border-gray-100 text-sm"
                >
                  <option readOnly>Sort</option>
                  <option value="title-asc">Title, A-Z</option>
                  <option value="title-desc">Title, Z-A</option>
                  <option value="price-asc">Price, Low-High</option>
                  <option value="price-desc">Price, High-Low</option>
                </select>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8  sm:grid-cols-2 lg:grid-cols-3">
              {Products.map((item) => (
                <ProductItem product={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default products;
