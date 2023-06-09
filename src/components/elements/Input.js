import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  // input:-internal-autofill-selected {
  //   background-color: green !important;
  // }
`;
const Input = ({ text, error, ...props }) => (
  <InputWrapper className=" mb-6">
    <label className="relative cursor-pointer">
      <input
        {...props}
        className=" text-black bg-white  text-body-color text-base  w-full autofill:bg-red-800
        rounded
        py-3
        px-[14px]
        border border-[f0f0f0]
        outline-none
        focus-visible:shadow-none
     focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
      />
      <span className=" capitalize text-sm px-2 text-gray-400 bg-white absolute left-3 top-0 transition duration-200 input-text">
        {text}
      </span>
    </label>
    {error && <p className="italic text-sm text-red-500 mt-2 ">{error}</p>}
  </InputWrapper>
);

export default Input;
