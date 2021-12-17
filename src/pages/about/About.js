import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="card text-white border-light"
          style={{ background: 'transparent' }}
        >
          <div className="card-body">
            <h1 className="font-custom">About</h1>
            <p>
              <b>1spaceX.com</b> is a web app that I built to learn how to use
              the SpaceX API, and to experiment with the new features of React.
            </p>
            <h2 className="font-custom">Features</h2>
            <p>
              <ul>
                <li>
                  Physical Component Search: Search engine for capsules, cores
                  or launches.
                </li>
                <li>
                  Gallery: Latest best images of SpaceX experiments.{' '}
                  <b>(Coming soon!)</b>
                </li>
              </ul>
            </p>
            <h2 className="font-custom">Developers</h2>
            <p>
              <ul>
                <li>Marcelo (@360macky)</li>
                <li>Lewis (@inffinite)</li>
              </ul>
            </p>
            <h2 className="font-custom">License</h2>
            <p>The source code of this app is under MIT License.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
