import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImg from '../../documents/images/background.png';

export const Container = styled.div`
  position: fixed;
  background-color: #b5dbd1;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  &:before {
    background-color: rgba(0, 0, 0, 0.47);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 5rem;
  z-index: 5555;
`;

export const Button = styled(Link)`
  text-align: center;
  white-space: nowrap;
  font-style: italic;
  font-size: clamp(2rem, 6vw, 10rem);

  padding: 1rem;
  z-index: 5555;
  width: 82rem;

  font-weight: 700;

  color: #fff;
  background: #fc6762;
  text-transform: uppercase;

  border: 5px solid #fff;
  border-radius: 1rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    filter: brightness(1.3);
    transform: translateY(-3px);
  }

  @media (max-width: 1400px) {

  }

  p {
    color: #fff;
    font-weight: 700;
    font-size: 30%;
  }
`;