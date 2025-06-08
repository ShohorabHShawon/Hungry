'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="py-10 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl text-center font-bold mb-6">About Hungry</h1>
          <p className="text-lg text-center max-w-2xl mx-auto mb-10">
            Welcome to Hungry, where we serve the finest dishes made with love
            and passion. Our mission is to offer you an unforgettable dining
            experience by blending exquisite flavors, fresh ingredients, and a
            cozy atmosphere.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-around mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-md mb-8 md:mb-0"
          >
            <Image
              width={500}
              height={500}
              src="/restaurant.png"
              alt="Excellent Service"
              className="w-250 h-250 mx-auto mb-4"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-lg text-left"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-6">
              Hungry was born from a love for great food and a desire to create
              an inclusive space where everyone feels welcome. Established in
              2023, we have quickly become a favorite spot for both locals and
              visitors. Our menu offers a diverse range of culinary delights
              that cater to every taste.
            </p>
            <h2 className="text-2xl font-semibold  mb-4">Our Team</h2>
            <p className="">
              Our talented chefs and friendly staff work tirelessly to ensure
              every guest has an amazing dining experience. We&apos;re committed
              to delivering top-quality service and making your visit to Hungry
              a memorable one.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-10 rounded-lg shadow-lg bg-gray-100 dark:bg-[#171717]"
        >
          <h2 className="text-3xl text-center font-semibold mb-8">
            Why Choose Us
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0">
            <div className="text-center max-w-xs">
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
                  width={500}
                  height={500}
                  src="/fresh.png"
                  alt="Excellent Service"
                  className="w-32 h-32 mx-auto mb-4 hover:scale-110 translate duration-300 ease-in-out"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="">
                We use only the freshest and highest quality ingredients in all
                our dishes, ensuring an unparalleled taste experience.
              </p>
            </div>

            <div className="text-center max-w-xs">
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
                  width={500}
                  height={500}
                  src="/location.png"
                  alt="Excellent Service"
                  className="w-32 h-32 mx-auto mb-4 hover:scale-110 translate duration-300 ease-in-out"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Cozy Atmosphere</h3>
              <p className="">
                Relax in our comfortable, welcoming environment that makes every
                meal special.
              </p>
            </div>

            <div className="text-center max-w-xs">
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
                  width={500}
                  height={500}
                  src="/service.png"
                  alt="Excellent Service"
                  className="w-32 h-32 mx-auto mb-4 hover:scale-110 translate duration-300 ease-in-out"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Excellent Service</h3>
              <p className="">
                Our staff is dedicated to providing you with top-notch service
                from the moment you walk through our doors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
