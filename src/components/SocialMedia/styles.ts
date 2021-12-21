import styled from 'styled-components';

export const Container = styled.div`
  width: 2.3rem;
  position: fixed;
  bottom: 0;
  left: 3rem;
  right: auto;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`;