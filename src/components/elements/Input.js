import React from 'react';

const Input = ({ text, ...props }) => (
  <div className=" mb-6">
    <label className="relative cursor-pointer">
      <input
        {...props}
        className=" text-black bg-white  text-body-color text-base  w-full
        rounded
        py-3
        px-[14px]
        border border-[f0f0f0]
        outline-none
        focus-visible:shadow-none
        focus:border-primary focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
      />
      <span className=" capitalize text-lg text-gray-400 bg-white absolute left-5 top-0 transition duration-200 input-text">
        {text}
      </span>
    </label>
  </div>
);

export default Input;
