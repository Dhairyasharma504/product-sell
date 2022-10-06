import React from 'react';

const Banner = () => (
  <section className="relative bg-image bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75 sm:to-black/25" />

    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl text-white font-extrabold sm: text-5xl">
          Let us find your
          <strong className="block font-extrabold text-yellow-500">
            Forever Home.
          </strong>
        </h1>

        <p className="mt-4 text-white max-w-lg sm:text-xl sm:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </div>
    </div>
  </section>
);

export default Banner;
