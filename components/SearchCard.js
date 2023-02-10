import React from 'react';
import { motion } from 'framer-motion';

const SearchCard = ({ type, information }) => {
  return (
    <motion.div
      className="w-9/12 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:hover:border-gray-600 dark:border-gray-700"
      role="listitem"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
    >
      {type === 'capsules' && (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
            {information.serial}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Last update: </b>{' '}
            <span className="capitalize">
              {information.last_update
                ? information.last_update
                : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Reuse count: </b>{' '}
            <span className="capitalize">
              {information.reuse_count
                ? information.reuse_count
                : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Status: </b>{' '}
            <span className="capitalize">
              {information.status ? information.status : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Type: </b>{' '}
            <span className="capitalize">
              {information.type ? information.type : 'Not available'}
            </span>
          </p>
          <a
            href={`https://www.google.com/search?q=${information.serial}`}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-full"
            rel="noreferrer"
          >
            Search capsule
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
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
          </a>
        </>
      )}
      {type === 'cores' && (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {information.serial}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Status: </b>{' '}
            <span className="capitalize">
              {information.status ? information.status : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Last update: </b>{' '}
            <span className="capitalize">
              {information.last_update
                ? information.last_update
                : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>ID: </b>{' '}
            <span className="capitalize">
              {information.id ? information.id : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Reuse count: </b>{' '}
            <span className="capitalize">
              {information.reuse_count
                ? information.reuse_count
                : 'Not available'}
            </span>
          </p>
          <a
            href={`https://www.google.com/search?q=${information.core_serial}`}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-full"
            rel="noreferrer"
          >
            Search capsule
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
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
          </a>
        </>
      )}
      {type === 'launches' && (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {information.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Rocket: </b>{' '}
            <span className="capitalize">
              {information.rocket ? information.rocket : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Reuse count: </b>{' '}
            <span className="capitalize">
              {information.reuse_count
                ? information.reuse_count
                : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Date local: </b>{' '}
            <span className="capitalize">
              {information.date_local
                ? information.date_local
                : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Upcoming: </b>{' '}
            <span className="capitalize">
              {information.upcoming ? 'Yes' : 'No'}
            </span>
          </p>
          <a
            href={`https://www.google.com/search?q=${information.name}`}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-full"
            rel="noreferrer"
          >
            Search capsule
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
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
          </a>
        </>
      )}
      {type === 'payloads' && (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {information.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Reused: </b>{' '}
            <span className="capitalize">
              {information.reused ? 'Yes' : 'No'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Regime: </b>{' '}
            <span className="capitalize">
              {information.regime ? information.regime : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Type: </b>{' '}
            <span className="capitalize">
              {information.type ? information.type : 'Not available'}
            </span>
          </p>
          <a
            href={`https://www.google.com/search?q=${information.name}`}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-full"
            rel="noreferrer"
          >
            Search capsule
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
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
          </a>
        </>
      )}
      {type === 'rockets' && (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {information.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Stages: </b>{' '}
            <span className="capitalize">
              {information.stages ? information.stages : 'Not available'}
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Description: </b>{' '}
            <span className="capitalize">
              {information.description
                ? information.description
                : 'Not available'}
            </span>
          </p>
          <a
            href={`https://www.google.com/search?q=${information.name}`}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-full"
            rel="noreferrer"
          >
            Search capsule
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
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
          </a>
        </>
      )}
    </motion.div>
  );
};

export default SearchCard;
