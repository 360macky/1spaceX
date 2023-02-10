import React from 'react';
import { NextPage } from 'next';

const GetStarted: NextPage = () => {
  return (
    <main className="flex justify-center py-8 min-h-[88vh]">
      <div className="lg:w-[1024px] border border-1 rounded-lg p-10">
        <h1 className="text-4xl font-bold leading-loose text-center">
          What is 1SpaceX
        </h1>
        <p>
          1spaceX is a web app that helps you to find all the information about
          SpaceX components. You can find information about the capsules, cores,
          launches, payloads and rockets.
        </p>
        <h2 className="text-3xl font-bold leading-loose">Features</h2>
        <p>
          <ul className="list-disc pl-6">
            <li>Search engine for all the physical components</li>
            <li>Information about the physical components</li>
            <li>Installable on mobile devices</li>
            <li>Fully responsive</li>
            <li>Reduces network requests by storing the data in the state</li>
            <li>Usage without sign up</li>
          </ul>
        </p>
        <h2 className="text-3xl font-bold leading-loose">License</h2>
        <p>
          This project is licensed under the terms of the{' '}
          <a
            href="https://github.com/360macky/1spaceX/blob/dev/LICENSE"
            target="_blank"
            className="underline underline-offset-4"
            rel="noreferrer"
          >
            MIT License
          </a>
        </p>
      </div>
    </main>
  );
};

export default GetStarted;
