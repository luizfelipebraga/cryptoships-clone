import styled from 'styled-components';
import BackgroundImg from '../../documents/images/background.png';

export const Background = styled.div`
  background-image: url(${BackgroundImg});
  background-color: #b5dbd1;

  min-height: 100%;
  width: 100%;
  position: fixed;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index:  2;
`;

export const Container = styled.section`
  height: 100%;
  background-color: rgba(0, 0, 0, .60);
`;

export const Header = styled.header`
  width: 100%;
  padding: 1.5rem;
  
  background: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
`;

export const Logo = styled.span`
  font-size: 2.8rem;
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
  z-index: 5555;
`;

export const Content = styled.section`
  height: 90vh;
  width: 100%;
`;

export const Main = styled.main`
  height: 100%;
  padding: 2rem 0;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 5rem;
  font-weight: black;
  text-transform: uppercase;
  font-style: italic;

  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  -webkit-text-fill-color: #ec725b;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
`;

export const TypeBox = styled.div`
  background: #e8e8e8;
  border-radius: 8px;
  border: 5px solid #fff;

  width: 75rem;
  height: 18rem;

  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;

  span {
    display: flex;
    flex-direction: row;
    gap: .5rem;
    
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 600;
    white-space: nowrap;
    color: #555555;
  }
`