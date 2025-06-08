'use client';
import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaHome } from 'react-icons/fa';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { MdContactMail } from 'react-icons/md';
import { RiFileInfoFill } from 'react-icons/ri';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';
import DarkmodeButton from './DarkmodeButton';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-lexend text-orange-600 font-extrabold">
              HUNGRY
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-2 lg:gap-4"
        >
          <DarkmodeButton />
          <Navbar title="Home" address="/" Icon={FaHome} />
          <Navbar title="About" address="#about" Icon={RiFileInfoFill} />
          <Navbar title="Menu" address="#menu" Icon={BiSolidFoodMenu} />
          <Navbar title="Contact" address="#contact" Icon={MdContactMail} />
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <DarkmodeButton />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#menu"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="#contact"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
