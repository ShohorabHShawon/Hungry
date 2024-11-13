'use client';
import React from 'react';
import Navbar from './Navbar';
import { FaHome } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { MdContactMail } from 'react-icons/md';
import Link from 'next/link';
import DarkmodeButton from './DarkmodeButton';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div className="shadow-lg relative z-50">
      <div className="flex justify-between items-center p-3 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4 items-center"
        >
          <Link href="/">
            {/* <Image src="/logo.svg" width={200} height={50} alt="logo" /> */}
            <h1 className="text-3xl font-lexend text-orange-600 font-extrabold">
              HUNGRY
            </h1>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4 mx-4"
        >
          <DarkmodeButton />
          <Navbar title="home" address="/" Icon={FaHome} />
          <Navbar title="about" address="#about" Icon={BsInfoCircleFill} />
          <Navbar title="menu" address="#menu" Icon={BiSolidFoodMenu} />
          <Navbar title="contact" address="#contact" Icon={MdContactMail} />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
