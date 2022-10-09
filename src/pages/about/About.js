import React from 'react';

const About = () => {
  return (
    <div className="container-sm">
      <div
        className="card text-white border-light"
        style={{ background: 'transparent' }}
      >
        <div className="card-body p-4">
          <h1 className="font-custom text-yellow">About 1SpaceX project</h1>
          <p>
            <b>1spaceX.com</b> is a web app that I built to learn how to use the
            SpaceX API, and to experiment with the new features of React.
          </p>
          <h2 className="font-custom text-yellow">Physical Component Search</h2>
          <p>
            <ul>
              <li>Capsules</li>
              <li>Cores</li>
              <li>Launches</li>
              <li>Payloads</li>
              <li>Rockets</li>
            </ul>
          </p>
          <h2 className="font-custom text-yellow">Developers</h2>
          <p>
            <ul>
              <li>Marcelo (@360macky)</li>
              <li>Lewis (@inffinite)</li>
            </ul>
          </p>
          <h2 className="font-custom text-yellow">License</h2>
          <p>The source code of this app is under MIT License.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
