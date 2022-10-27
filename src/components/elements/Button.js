import React from 'react';

const Button = ({ children, ...props }) => (
  <div>
    <div className="text-center">
      <button
        type="button"
        className="w-3/4 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-yellow-500 shadow-lg focus:outline-none hover:bg-green-600 hover:shadow-none"
        {...props}
      >
        {children}
      </button>
    </div>
  </div>
);
export default Button;
