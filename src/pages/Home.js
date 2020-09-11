import React from 'react';

function Home() {
  return (
    <div className="cover--home min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="display-4 font-custom text-white text-center">
          Find SpaceX capsules
        </h1>
        <p className="text-white text-center h4">
          With SpaceX Capsules Search you can find awesome space capsules
        </p>
        <div className="lead text-center">
          <a
            href="/capsules"
            className="btn btn-light btn-lg mt-3 font-custom shadow-lg"
          >
            Capsules
          </a>
          &nbsp;
          <a
            href="/launches"
            className="btn btn-light btn-lg mt-3 font-custom shadow-lg"
          >
            Launches
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
