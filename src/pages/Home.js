import React from 'react';
import SpaceX from './spacex.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="cover--home d-flex flex-column flex-wrap justify-content-center align-items-center"
      style={{ minHeight: '90vh' }}
    >
      <img src={SpaceX} style={{ width: '400px' }} className="mb-4 spacex-X" alt="SpaceX logo" />
      <div>
        <h1 className="display-4 font-custom text-white text-center spacex-title">
          Find SpaceX things.
        </h1>
        <p className="text-white text-center h4">
          Like capsules or launches...
        </p>
        <div className="lead text-center homepage__buttons">
          <Link
            to="/capsules"
            className="homepage__button btn btn-outline-light btn-lg mt-3 font-custom shadow-lg"
            title="Capsules"
          >
            Capsules
          </Link>
          &nbsp;
          <Link
            to="/cores"
            className="homepage__button btn btn-outline-light btn-lg mt-3 font-custom shadow-lg"
            title="Cores"
          >
            Cores
          </Link>
          &nbsp;
          <Link
            to="/launches"
            className="homepage__button btn btn-outline-light btn-lg mt-3 font-custom shadow-lg"
            title="Launches"
          >
            Launches
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
