import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #ffffff;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-family: serif;
  font-weight: bold;
  color: #065000;
`;

const LinksWrapper = styled.div`
  display: flex;
`;

const LinkItem = styled(Link)`
  margin-left: 1rem;
  color: #065000;
  text-decoration: none;
`;

const TitleLink = styled(Link)`
  color: #065000;
  text-decoration: none;
`;

type HeaderProps = {
  siteTitle: string;
};

export const Header = ({ siteTitle }: HeaderProps) => (
  <HeaderWrapper>
    <HeaderContainer>
      <TitleLink to="/">
        <Title>{siteTitle}</Title>
      </TitleLink>
      <LinksWrapper>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/about">About</LinkItem>
        <LinkItem to="/contact">Contact</LinkItem>
      </LinksWrapper>
    </HeaderContainer>
  </HeaderWrapper>
);
