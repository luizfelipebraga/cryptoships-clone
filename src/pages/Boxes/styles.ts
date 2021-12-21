import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
`;

export const Header = styled.header`
  height: 100%;
  width: 100%;

  padding: 2rem;
  position: fixed;

  background: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1150px;
  margin: 0 auto;
`;

export const Logo = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff6563;
  text-transform: uppercase;
  font-style: italic;
`;

export const MetaMaskSignIn = styled.button`
  color: #ff6563;
  font-size: 1.3rem;
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;

`;