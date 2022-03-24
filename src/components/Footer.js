import React from 'react';
import styled from 'styled-components';
import '../global.css';

const FooterLink = ({ text, to }) => {
  return (
    <a
      href={to}
      className="footer-text mx-2"
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
    <FooterContainer className="w-100 footer text-custom py-4">
      <div className='footer-content'>
      <FooterLink
        to="https://github.com/360macky/1spaceX"
        text="Repository"
      />
      {/* <FooterLink
        to="https://github.com/360macky/1spaceX/graphs/contributors"
        text="Contributors"
      /> */}
      {/* <FooterLink
        to="https://github.com/360macky/1spaceX/issues"
        text="Issues"
      /> */}
      <FooterLink to="https://marceloarias.com" text="@360macky" />
      {/* <FooterLink to="https://www.spacex.com/" text="SpaceX Classical" /> */}
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

export default Footer;
