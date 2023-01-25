import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import capsule from './capsule.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>1SpaceX</title>
      </Head>
      <main>
        <section className="bg-white dark:bg-black min-h-[88vh] flex items-center">
          <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
            <div className="place-self-center mr-auto lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold font-space leading-none md:text-5xl xl:text-6xl dark:text-white">
                Find SpaceX physical components
              </h1>
              <p className="mb-6 max-w-2xl font-lighttext-gray-500 md:tracking-wider lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                The search platform for SpaceX physical items
              </p>
              <Link
                href="/get-started"
                className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-l from-yellow-600 to-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-500 dark:focus:ring-yellow-900"
              >
                Get started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <a
                href="https://github.com/360macky/1spacex"
                target="_blank"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Source code
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src={capsule}
                alt="Capsule of SpaceX"
                className="w-full capsule"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
