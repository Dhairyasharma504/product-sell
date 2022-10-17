import React, { useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <a className="block text-teal-600">
                <span className="sr-only">Home</span>
                <Image
                  src="/images/logo.webp"
                  alt="Picture of the author"
                  width={150}
                  height={50}
                />
              </a>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2>

              {/* <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  About
                </a>
              </li>
            </ul> */}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex items-center sm:gap-4">
              <Link href="/login">
                <a className="hidden sm:flex rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-600">
                  Login
                </a>
              </Link>

              <div className="hidden sm:flex">
                <Link href="/register">
                  <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600">
                    Register
                  </a>
                </Link>
              </div>
              <div className="sm:flex cursor-pointer">
                <BsHandbag />
              </div>
              <div className=" rounded-full  hover:bg-slate-100 duration-700    ">
                <Link href="/UserProfile">
                  <img
                    className="h-11 w-11  rounded-full object-fill object-center overflow-hidden m-2"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1…d=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="profile"
                  />
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          open
            ? 'flex flex-col items-center justify-start order-2 w-full'
            : 'hidden'
        } md:hidden`}
      >
        <Link href="/login">
          <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
            Login
          </a>
        </Link>

        <div className="flex py-4">
          <Link href="/register">
            <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600">
              Register
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex cursor-pointer">
          <BsHandbag />
        </div>
      </div>
    </header>
  );
};

export default Header;
