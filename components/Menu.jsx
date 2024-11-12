'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Menu = () => {
  return (
    <div className="py-14 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Starters Section */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
          >
            <h1 className="text-4xl text-center font-lexendDeca font-bold mb-8 py-5">
              Our Menu
            </h1>
          </motion.div>

          {/* Category Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.65, 0, 0.35, 1],
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">Starters</h2>
          </motion.div>

          {/* Menu Animation*/}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-96 lg:h-72 w-auto">
            {/* Starter Item */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/bread.png"
                alt="Garlic Bread"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div className="">
                <h3 className="text-xl font-bold mb-2">Garlic Bread</h3>
                <p className="mb-4 line-clamp-1">
                  Freshly baked bread with garlic butter and herbs.
                </p>
                <p className="font-semibold">৳499</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/salad.png"
                alt="Caesar Salad"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Caesar Salad</h3>
                <p className="mb-4 line-clamp-1">
                  Crisp romaine lettuce, croutons, and parmesan with Caesar
                  dressing.
                </p>
                <p className="font-semibold">৳799</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/soup.png"
                alt="Soup of the Day"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Soup of the Day</h3>
                <p className="mb-4 line-clamp-1">
                  Chef&apos;s special soup made with fresh ingredients.
                </p>
                <p className="font-semibold">৳650</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/sandwich.png"
                alt="Sandwich"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Sandwich</h3>
                <p className="mb-4 line-clamp-1">
                  Classic sandwich with ham, cheese, lettuce, and tomato.
                </p>
                <p className="font-semibold">৳650</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Courses Section */}
        <div className="mb-10 mt-36 sm:mt-32 md:mt-32 lg:mt-52 xl:mt-20">
          {/* Category Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">Main Courses</h2>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-96 lg:h-72 w-auto">
            {/* Main Course Item */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/grill.png"
                alt="Grilled Chicken"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Grilled Chicken</h3>
                <p className="mb-4 line-clamp-1">
                  Juicy grilled chicken breast served with roasted vegetables.
                </p>
                <p className="font-semibold">৳1499</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/pizza.png"
                alt="Margherita Pizza"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Margherita Pizza</h3>
                <p className="mb-4 line-clamp-1">
                  Classic pizza topped with fresh tomatoes, mozzarella, and
                  basil.
                </p>
                <p className="font-semibold">৳1299</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/steak.png"
                alt="Steak and Fries"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Steak and Fries</h3>
                <p className="mb-4 line-clamp-1">
                  Tender steak grilled to perfection, served with crispy fries.
                </p>
                <p className="font-semibold">৳1999</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/burger.png"
                alt="Burger and Fries"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Burger and Fries</h3>
                <p className="mb-4 line-clamp-1">
                  Burger with a juicy patty, cheese, lettuce, and tomato and
                  French fries.
                </p>
                <p className="font-semibold">৳699</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desserts Section */}
        <div className="mb-10 mt-36 sm:mt-32 md:mt-32 lg:mt-52 xl:mt-20">
          {/* Category Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">Desserts</h2>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-96 lg:h-72 w-auto">
            {/* Dessert Item */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/cake.png"
                alt="Chocolate Cake"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Chocolate Cake</h3>
                <p className="mb-4 line-clamp-1">
                  Rich chocolate cake served with a side of whipped cream.
                </p>
                <p className="font-semibold">৳599</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/cheesecake.png"
                alt="Cheesecake"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Cheesecake</h3>
                <p className="mb-4 line-clamp-1">
                  Creamy cheesecake with a graham cracker crust and strawberry
                  topping.
                </p>
                <p className="font-semibold">৳699</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/ice-cream.png"
                alt="Ice-Cream Sundae"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Ice-Cream Sundae</h3>
                <p className="mb-4 line-clamp-1">
                  A classic sundae with vanilla ice cream, chocolate sauce, and
                  a cherry on top.
                </p>
                <p className="font-semibold">৳450</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
              }}
              className="rounded-lg shadow-md flex justify-start items-center bg-white dark:bg-[#151515]"
            >
              <Image
                src="/donut.png"
                alt="Donut"
                width={120}
                height={100}
                className="w-auto h-[100%] object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Donut</h3>
                <p className="mb-4 line-clamp-1">
                  Donut with different flavors and toppings.
                </p>
                <p className="font-semibold">৳150</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
