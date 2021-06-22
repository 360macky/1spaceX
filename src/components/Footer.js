import React from 'react';

function Footer() {
  return (
    <div
      className="text-center w-100"
      style={{
        minHeight: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '5px',
        paddingRight: '5px'
      }}
    >
      <p className="text-custom">
        <a
          href="https://github.com/360macky/spacex-search"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Repository"
        >
          GitHub Repository
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/360macky/spacex-search/graphs/contributors"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          title="Contributors"
        >
          Contributors
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/360macky/spacex-search/issues"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          title="Issues"
        >
          Issues
        </a>{' '}
        |{' '}
        <a
          href="https://www.spacex.com/"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          title="SpaceX Official Website"
        >
          SpaceX Classical
        </a>
      </p>
    </div>
  );
}

export default Footer;
