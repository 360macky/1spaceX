import React from 'react';
import SpaceX from '../images/rocket.svg';
import { Link } from 'react-router-dom';
import MacbookPreview from '../images/macbook_preview.webp';

function Home() {
  return (
    <>
      <div
        className="cover--home d-flex flex-column flex-wrap justify-content-center align-items-center"
        style={{ minHeight: '90vh' }}
      >
        <HomeXLogo />
        <div>
          <h1 className="display-4 font-custom text-white text-center spacex-title">
            Find SpaceX things.
          </h1>
          <p className="text-white text-center h4">
            Search platform for SpaceX physical items
          </p>
          <div className="lead text-center homepage__buttons">
            <HomeButton to="/capsules" title="Capsules" />
            <HomeButton to="/cores" title="Cores" />
            <HomeButton to="/launches" title="Launches" />
            <HomeButton to="/payloads" title="Payloads" />
            <HomeButton to="/rockets" title="Rockets" />
          </div>
          <div className="d-flex justify-content-center w-100  pt-4">
            <Link
              to={'/about'}
              className="custom-link link-yellow text-yellow fs-5 text-center text-decoration-none"
            >
              About this website
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container font-custom d-flex flex-column flex-wrap justify-content-center align-items-center"
        style={{ minHeight: '90vh' }}
      >
        <HomeSectionTitle text="Are you ready for lift off?" />
        <div className="d-flex flex-row justify-content-center align-items-center text-white flex-wrap">
          <img
            src={MacbookPreview}
            style={{ width: '35%', padding: '5px', borderRadius: '25px' }}
          />
          <div style={{ marginLeft: '15px' }}>
            <h3>How it works?</h3>
            <p>1. Click on your space exploration component.</p>
            <p>
              2. Enter the search or keyword of the component <br />
              you are looking for.
            </p>
            <p>3. Get the results you want!</p>
          </div>
        </div>
      </div>
    </>
  );
}

const HomeButton = ({ title, to }) => {
  return (
    <Link
      to={to}
      className="homepage__button btn btn-outline-light btn-lg mt-3 font-custom shadow-lg mx-1"
      title={title}
    >
      {title}
    </Link>
  );
};

const HomeSectionTitle = ({ text }) => {
  return (
    <h2 className="text-center text-yellow" style={{ marginBottom: '4rem' }}>
      {text}
    </h2>
  );
};

const HomeXLogo = () => {
  return (
    <img
      src={SpaceX}
      style={{ minHeight: '30vh' }}
      className="my-4 spacex-X"
      alt="SpaceX logo"
    />
  );
};

export default Home;
