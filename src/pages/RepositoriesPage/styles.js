import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Container = styled.main`
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 40px;
  overflow-y: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
