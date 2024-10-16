import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl text-center font-lexend font-bold text-gray-800 mb-6">
          About Hungry
        </h1>

        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Welcome to Hungry, where we serve the finest dishes made with love and
          passion. Our mission is to offer you an unforgettable dining
          experience by blending exquisite flavors, fresh ingredients, and a
          cozy atmosphere.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-around mb-10">
          <div className="max-w-md mb-8 md:mb-0">
            <Image
              width={500}
              height={500}
              src="/restaurant.png"
              alt="Excellent Service"
              className="w-250 h-250 mx-auto mb-4"
            />
          </div>
          <div className="max-w-lg text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              Hungry was born from a love for great food and a desire to create
              an inclusive space where everyone feels welcome. Established in
              2023, we have quickly become a favorite spot for both locals and
              visitors. Our menu offers a diverse range of culinary delights
              that cater to every taste.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Team
            </h2>
            <p className="text-gray-600">
              Our talented chefs and friendly staff work tirelessly to ensure
              every guest has an amazing dining experience. We're committed to
              delivering top-quality service and making your visit to Hungry a
              memorable one.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white py-10 rounded-lg shadow-lg">
          <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">
            Why Choose Us
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0">
            <div className="text-center max-w-xs">
              <Image
                width={500}
                height={500}
                src="/fresh.png"
                alt="Excellent Service"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We use only the freshest and highest quality ingredients in all
                our dishes, ensuring an unparalleled taste experience.
              </p>
            </div>

            <div className="text-center max-w-xs">
              <Image
                width={500}
                height={500}
                src="/location.png"
                alt="Excellent Service"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Cozy Atmosphere
              </h3>
              <p className="text-gray-600">
                Relax in our comfortable, welcoming environment that makes every
                meal special.
              </p>
            </div>

            <div className="text-center max-w-xs">
              <Image
                width={500}
                height={500}
                src="/service.png"
                alt="Excellent Service"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Excellent Service
              </h3>
              <p className="text-gray-600">
                Our staff is dedicated to providing you with top-notch service
                from the moment you walk through our doors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
