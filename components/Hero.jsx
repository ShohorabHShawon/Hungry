import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <>
      <div
        className="flex justify-evenly items-center mx-auto max-w-8xl
        bg-gradient-to-r from-blue-300 to-cyan-200"
      >
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            <div className="space-y-7 text-dark order-2 sm:order-1 ml-3">
              <h1 className="text-6xl font-lexend">
                Fresh, Delicious & Healthy Foods{' '}
                <span className="text-orange-600 font-cursive text-7xl">
                  Delivery
                </span>{' '}
                in <span className="text-orange-600">Dhaka</span>
              </h1>
              <p>Delicious Foods Delivered to Your Door. Starts From ৳399</p>
              <Link
                href="#"
                class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-600 rounded-xl group"
              >
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-900 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-800 rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Order Now
                </span>
              </Link>
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
