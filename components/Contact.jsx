import React from 'react';

const Contact = () => {
  return (
    <div className="py-10 my-24 bg-gray-200 dark:bg-[#262626]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl text-center font-lexend font-bold mb-8">
          Contact Us
        </h1>
        <div className="flex justify-center">
          <div className="w-full rounded-lg shadow-lg p-6 mb-6 bg-gray-100 dark:bg-[#171717] text-center">
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <p className=" mb-2">
              If you have any questions or feedback, feel free to reach out to
              us!
            </p>
            <div className="mb-4">
              <h3 className="font-semibold ">Address:</h3>
              <p className="">Sector 7 Uttara, Dhaka</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold ">Phone:</h3>
              <p className="">(123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold ">Email:</h3>
              <p className="">contact@hungryrestaurant.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
