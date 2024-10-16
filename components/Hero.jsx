import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <>
      <div className="flex justify-evenly items-center mx-auto max-w-8xl">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            <div className="space-y-7 text-dark order-2 sm:order-1">
              <h1 className="text-6xl">
                Fresh, Delicious & Healthy Foods{' '}
                <span className="text-blue-400 font-cursive text-7xl">
                  Delivery
                </span>{' '}
                in Uttara
              </h1>
              <p>Delicious Foods Delivered to Your Door. Starts From $399</p>
            </div>
            <div className="order-1 sm:order-2 flex justify-center md:justify-end w-full lg:justify-end">
              <Image
                src="/hero.png"
                alt="hero image"
                width={500}
                height={500}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
