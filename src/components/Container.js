import React from 'react';

const Container = ({ children }) => (
  <div className="container lg:max-w-screen-lg mx-auto px-6 lg:px-0 pt-16">
    {children}
  </div>
);

export default Container;
