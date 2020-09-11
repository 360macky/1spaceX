import React from 'react';

function Home() {
  return (
    <div
      className="cover--home d-flex justify-content-center align-items-center"
      style={{ minHeight: '90vh' }}
    >
      <div>
        <h1 className="display-4 font-custom text-white text-center">
          Find SpaceX things.
        </h1>
        <p className="text-white text-center h4">
          Like capsules or launches...
        </p>
        <div className="lead text-center">
          <a
            href="/capsules"
            className="btn btn-outline-light btn-lg mt-3 font-custom shadow-lg"
          >
            Capsules
          </a>
          &nbsp;
          <a
            href="/launches"
            className="btn btn-outline-light btn-lg mt-3 font-custom shadow-lg"
          >
            Launches
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
