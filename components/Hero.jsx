'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl opacity-20 scale-110"></div>
                <Image
                  src="/hero.png"
                  alt="Delicious food"
                  width={600}
                  height={600}
                  className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                  ✨ Fresh & Delicious
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  Taste the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Future
                  </span>{' '}
                  of Food
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  Experience culinary excellence with our chef-crafted dishes,
                  delivered fresh to your doorstep in Dhaka.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#menu"
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25"
                >
                  <span className="relative z-10">Order Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="#about"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Happy Customers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Menu Items
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    4.9
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Hero Image - Shows first on mobile/tablet, second on desktop */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl opacity-20 scale-110"></div>
                <Image
                  src="/hero.png"
                  alt="Delicious food"
                  width={600}
                  height={600}
                  className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content - Shows second on mobile/tablet, first on desktop */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium"
                >
                  ✨ Fresh & Delicious
                </motion.span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  Taste the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Future
                  </span>{' '}
                  of Food
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  Experience culinary excellence with our chef-crafted dishes,
                  delivered fresh to your doorstep in Dhaka.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#menu"
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25"
                >
                  <span className="relative z-10">Order Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="#about"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Happy Customers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Menu Items
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    4.9
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Rating
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
