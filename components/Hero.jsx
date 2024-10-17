'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <>
      <div
        className="h-screen flex justify-evenly items-center mx-auto max-w-8xl
        bg-gradient-to-r from-blue-300 to-cyan-200 dark:bg-gradient-to-r dark:from-gray-900 dark:to-black"
      >
        <div className="container py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-7 text-dark order-2 sm:order-1 ml-3 text-center sm:text-left md:text-left lg:text-left xl:text-left"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Fresh, Delicious & Healthy Foods{' '}
                <span className="text-orange-600 font-cursive text-7xl">
                  Delivery
                </span>{' '}
                in <span className="text-orange-600">Dhaka</span>
              </h1>
              <p>
                Delicious Foods Delivered to Your Door. <br /> Starts From ৳399
              </p>
              <Link
                href="#"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-600 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-900 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-800 rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Order Now
                </span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="order-1 sm:order-2 flex justify-center md:justify-end w-full lg:justify-end xl:justify-end"
            >
              <Image
                src="/hero.png"
                alt="hero image"
                width={500}
                height={200}
                className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-auto h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2nd Part */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=""
      >
        <h1 className="text-3xl text-center font-lexend m-6 p-2 font-bold">
          Healthy and Tasty
        </h1>
        <div className="flex justify-evenly items-center flex-wrap">
          <div className="flex max-w-7xl text-wrap justify-evenly items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
            >
              <Image
                src="/capsicum.png"
                width={500}
                height={500}
                alt="image"
                className="p-2 drop-shadow-xl w-[1400px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
              />
            </motion.div>
            <p className="p-6 text-balance">
              Our food is made with the freshest ingredients and is perfect for
              those who want to eat healthy and tasty food. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Enim, sit iusto dolore
              voluptate, quod porro, facere tempore ex corrupti excepturi
              reprehenderit iure id doloribus ratione ad vel eveniet. Sunt,
              neque.
            </p>
          </div>

          <div className="flex max-w-7xl text-wrap justify-evenly items-center">
            <p className="p-6 text-end text-balance">
              Our food is made with the freshest ingredients and is perfect for
              those who want to eat healthy and tasty food. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Officia, eligendi. Deleniti
              nobis nulla cupiditate reprehenderit aliquid, fuga aliquam ipsum
              asperiores voluptatum inventore debitis adipisci natus non
              laboriosam ea perspiciatis ipsam?
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
            >
              <Image
                src="/greencapsicum.png"
                width={500}
                height={500}
                alt="image"
                className="p-2 drop-shadow-xl w-[1400px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
              />
            </motion.div>
          </div>
          <div className="flex max-w-7xl text-wrap justify-evenly items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
            >
              <Image
                src="/leaf.png"
                width={500}
                height={500}
                alt="image"
                className="p-2 drop-shadow-xl w-[1400px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
              />
            </motion.div>
            <p className="p-6 text-balance">
              Our food is made with the freshest ingredients and is perfect for
              those who want to eat healthy and tasty food. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Est, ad deleniti eum
              praesentium temporibus sit unde porro quod commodi et suscipit
              quos iste harum modi! Tempora iusto eaque at accusantium.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
