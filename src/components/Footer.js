import React from 'react';
import styled from 'styled-components';

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
    <FooterContainer className="w-100 text-custom py-4">
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
