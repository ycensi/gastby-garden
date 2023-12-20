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

const HomeTitle = styled.h1`
  margin: 0;
  font-size: var(--fontSize-7);
  font-family: var(--font-heading);
  color: #065000;
`;

const DefaultTitle = styled(Link)`
  color: #065000;
  font-weight: 700;
  font-family: var(--font-heading);
  text-decoration: none;
  font-size: var(--fontSize-2);
`;

const LinksWrapper = styled.div`
  display: flex;
`;

const LinkItem = styled(Link)`
  margin-left: 1rem;
  color: #065000;
  text-decoration: none;
`;

type HeaderProps = {
  title: string;
  isHome?: boolean;
};

const HeaderTitle = ({ isHome, title }: HeaderProps) => isHome ? (
  <HomeTitle>
    {title}
  </HomeTitle>
) : (
  <DefaultTitle to={'/'}>{title}</DefaultTitle>
)

export const Header = ({ title, isHome }: HeaderProps) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderTitle title={title} isHome={isHome} />
      <LinksWrapper>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/about">About</LinkItem>
        <LinkItem to="/contact">Contact</LinkItem>
      </LinksWrapper>
    </HeaderContainer>
  </HeaderWrapper>
);
