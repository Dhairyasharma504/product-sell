import React from 'react';
import Link from 'next/link';
import { HiMenuAlt1 } from 'react-icons/hi';

const Headers = ({ onMenuClick }) => (
  <div className="bg-primary">
    <div className=" px-2 items-center py-3 justify-between flex mx-auto ">
      <div className="xl:w-96">
        <div className="input-group relative flex  items-stretch">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn  px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-brand hover:shadow-lg focus:bg-brand  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-brand active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex ">
        <button type="button" onClick={onMenuClick}>
          <HiMenuAlt1 className="text-white h-8 w-8 hover:text-brand" />
        </button>

        <div className="  rounded-full cursor-pointer ">
          <Link href="/pages/auth/profile">
            <img
              className="h-11 w-11  rounded-full object-fill object-center overflow-hidden m-2"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1…d=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="profile"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Headers;
