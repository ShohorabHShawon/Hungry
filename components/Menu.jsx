'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Menu = () => {
  const menuData = [
    {
      category: 'Starters',
      items: [
        {
          id: 1,
          name: 'Garlic Bread',
          description: 'Freshly baked bread with garlic butter and herbs.',
          price: '৳499',
          image: '/bread.png',
          alt: 'Garlic Bread'
        },
        {
          id: 2,
          name: 'Caesar Salad',
          description: 'Crisp romaine lettuce, croutons, and parmesan with Caesar dressing.',
          price: '৳799',
          image: '/salad.png',
          alt: 'Caesar Salad'
        },
        {
          id: 3,
          name: 'Soup of the Day',
          description: 'Chef\'s special soup made with fresh ingredients.',
          price: '৳650',
          image: '/soup.png',
          alt: 'Soup of the Day'
        },
        {
          id: 4,
          name: 'Sandwich',
          description: 'Classic sandwich with ham, cheese, lettuce, and tomato.',
          price: '৳650',
          image: '/sandwich.png',
          alt: 'Sandwich'
        }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        {
          id: 5,
          name: 'Grilled Chicken',
          description: 'Juicy grilled chicken breast served with roasted vegetables.',
          price: '৳1499',
          image: '/grill.png',
          alt: 'Grilled Chicken'
        },
        {
          id: 6,
          name: 'Margherita Pizza',
          description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
          price: '৳1299',
          image: '/pizza.png',
          alt: 'Margherita Pizza'
        },
        {
          id: 7,
          name: 'Steak and Fries',
          description: 'Tender steak grilled to perfection, served with crispy fries.',
          price: '৳1999',
          image: '/steak.png',
          alt: 'Steak and Fries'
        },
        {
          id: 8,
          name: 'Burger and Fries',
          description: 'Burger with a juicy patty, cheese, lettuce, and tomato and French fries.',
          price: '৳699',
          image: '/burger.png',
          alt: 'Burger and Fries'
        }
      ]
    },
    {
      category: 'Desserts',
      items: [
        {
          id: 9,
          name: 'Chocolate Cake',
          description: 'Rich chocolate cake served with a side of whipped cream.',
          price: '৳599',
          image: '/cake.png',
          alt: 'Chocolate Cake'
        },
        {
          id: 10,
          name: 'Cheesecake',
          description: 'Creamy cheesecake with a graham cracker crust and strawberry topping.',
          price: '৳699',
          image: '/cheesecake.png',
          alt: 'Cheesecake'
        },
        {
          id: 11,
          name: 'Ice-Cream Sundae',
          description: 'A classic sundae with vanilla ice cream, chocolate sauce, and a cherry on top.',
          price: '৳450',
          image: '/ice-cream.png',
          alt: 'Ice-Cream Sundae'
        },
        {
          id: 12,
          name: 'Donut',
          description: 'Donut with different flavors and toppings.',
          price: '৳150',
          image: '/donut.png',
          alt: 'Donut'
        }
      ]
    }
  ];

  return (
    <div className="py-14 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
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

        {menuData.map((section, sectionIndex) => (
          <div 
            key={section.category} 
            className={`mb-10 ${sectionIndex > 0 ? 'mt-36 sm:mt-32 md:mt-32 lg:mt-52 xl:mt-20' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>
            </motion.div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-96 lg:h-72 w-auto">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ 
                    opacity: 0, 
                    x: itemIndex % 2 === 0 ? -100 : 100 
                  }}
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
                    src={item.image}
                    alt={item.alt}
                    width={120}
                    height={100}
                    className="w-auto h-[100%] object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-1">{item.name}</h3>
                    <p className="mb-3 line-clamp-1">{item.description}</p>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
