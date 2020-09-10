import React from 'react';

function Home() {
  return (
    <div className="cover min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="display-4 font-custom text-white text-center">
          Find SpaceX capsules
        </h1>
        <p className="text-white text-center h4">
          With SpaceX Capsules Search you can find awesome space capsules
        </p>
        <p className="lead text-center">
          <a
            href="/capsules"
            className="btn btn-light btn-lg mt-3 font-custom shadow-lg"
          >
            Search now!
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
