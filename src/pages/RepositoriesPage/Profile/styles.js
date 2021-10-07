import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  margin-bottom: 2rem;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Avatar = styled.img`
  width: 70%;
  border-radius: 50%;
  align-self: center;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
  }
`;

export const Name = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Login = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    align-self: center;
  }
`;

export const Inner = styled.div`
  padding: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;

  svg {
    margin-right: 10px;
  }
`;
