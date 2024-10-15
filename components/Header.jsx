import React from 'react';
import Navbar from './Navbar';

import { FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { MdConnectWithoutContact } from 'react-icons/md';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Link from 'next/link';
import DarkmodeButton from './DarkmodeButton';

function Header() {
  return (
    <div className="shadow-lg">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <h1 className="text-3xl font-extrabold">HUNGRY</h1>
          </Link>
        </div>
        <div className="flex gap-4 mx-4">
          <DarkmodeButton />
          <Navbar title="home" address="/" Icon={FaHome} />
          <Navbar title="about" address="#about" Icon={FaInfo} />
          <Navbar
            title="contact"
            address="#contact"
            Icon={MdConnectWithoutContact}
          />
          <Navbar title="menu" address="#menu" Icon={MdOutlineRestaurantMenu} />
        </div>
      </div>
    </div>
  );
}

export default Header;
