import React from 'react';

const FooterLink = ({ text, to }) => {
  return (
    <a
      href={to}
      className="text-white mx-2"
      target="_blank"
      rel="noopener noreferrer"
      title={text}
    >
      {text}
    </a>
  );
};

function Footer() {
  return (
    <div
      className="text-center w-100 text-custom"
      style={{
        minHeight: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <FooterLink
        to="https://github.com/360macky/1spaceX"
        text="GitHub Repository"
      />
      <FooterLink
        to="https://github.com/360macky/1spaceX/graphs/contributors"
        text="Contributors"
      />
      <FooterLink
        to="https://github.com/360macky/1spaceX/issues"
        text="Issues"
      />
      <FooterLink to="https://marceloarias.com" text="@360macky" />
      <FooterLink to="https://www.spacex.com/" text="SpaceX Classical" />
    </div>
  );
}

export default Footer;
