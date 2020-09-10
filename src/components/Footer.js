import React from 'react';

function Footer() {
  return (
    <div
      className="text-center w-100"
      style={{
        minHeight: '25vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p className="text-custom">
        <a
          href="https://github.com/360macky/spacex-capsules-search"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Repository"
        >
          GitHub Repository
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/360macky/spacex-capsules-search/graphs/contributors"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          title="Contributors"
        >
          Contributors
        </a>{' '}
        |{' '}
        <a
          href="https://www.spacex.com/"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          title="SpaceX Classical"
        >
          SpaceX Classical
        </a>
      </p>
    </div>
  );
}

export default Footer;
