import React from 'react';
import Link from 'next/link';

const Banner = () => (
  <section className="relative bg-images bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75" />
    {/* sm:to-black/25 */}
    <div className="relative mx-auto max-w-screen-3xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-3xl text-center sm:text-left">
        <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
          Order Tasty & <br />
          Fresh Food
          <strong className="block font-extrabold text-yellow-500">
            Anytime!
          </strong>
        </h1>

        <p className="my-4 text-white max-w-lg sm:text-xl sm:leading-relaxed">
          To Give You A Taste Of What To Expect, See Our Amazing New Menu
        </p>

        <div className="mt-6">
          <Link href="/login">
            <a className="rounded-md bg-brand px-5 py-5 text-lg font-medium text-white shadow hover:bg-brand">
              See Menu & Order Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
