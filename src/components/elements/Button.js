import React from 'react';

const Button = () => (
  <div>
    <button
      name="add"
      type="button"
      className="rounded-lg mt-4 flex w-full items-center justify-center  bg-yellow-500 px-8 py-4 hover:bg-teal-600 hover:text-white"
    >
      <span className="text-sm font-medium"> Add to Cart </span>
    </button>
  </div>
);

export default Button;
