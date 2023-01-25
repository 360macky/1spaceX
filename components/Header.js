import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import Logo from '../assets/LogoIcon.png';

const Header = () => {
  return (
    <Navbar className="dark:bg-black lg:py-6">
      <Navbar.Brand>
        <div className="flex flex-row gap-x-2">
          <Image src={Logo} className="h-8 w-8" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-space">
            1SpaceX
          </span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          className="font-space cursor-pointer text-base dark:text-white decoration-yellow-300 hover:underline hover:underline-offset-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="font-space cursor-pointer text-base dark:text-white decoration-yellow-300 hover:underline hover:underline-offset-4"
          href="/search/capsules"
        >
          Capsules
        </Link>
        <Link
          className="font-space cursor-pointer text-base dark:text-white decoration-yellow-300 hover:underline hover:underline-offset-4"
          href="/search/cores"
        >
          Cores
        </Link>
        <Link
          className="font-space cursor-pointer text-base dark:text-white decoration-yellow-300 hover:underline hover:underline-offset-4"
          href="/search/launches"
        >
          Launches
        </Link>
        <Link
          className="font-space cursor-pointer text-base dark:text-white decoration-yellow-300 hover:underline hover:underline-offset-4"
          href="/search/payloads"
        >
          Payloads
        </Link>
        <Link
          className="font-space cursor-pointer text-base dark:text-white decoration-yellow-300 hover:underline hover:underline-offset-4"
          href="/search/rockets"
        >
          Rockets
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
