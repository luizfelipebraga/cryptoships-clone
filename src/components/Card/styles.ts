import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 5rem;
  width: 5rem;
`;

export const Card = styled.div`
  background: #b5dbd1;
  border-radius: 5px;
  border: 5px solid #fff;

  width: 22rem;
`;

export const ImgCard = styled.img`
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 2.2rem;
  margin-left: auto;
  margin-right: auto;
  width: 15rem;
`;

export const BoxDescription = styled.div`
  background: #e9e9e9;

  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  span {
    font-weight: 900;
    white-space: nowrap;
    font-style: italic;
    &:first-child {
      font-size: 1.8rem;
    }

    &:nth-child(2) {
      font-size: 1.1rem;
    }
  }
`;

export const BuyButton = styled.a`
  margin-top: 3rem;
  padding: 1rem;
  width: 22rem;

  white-space: nowrap;
  text-transform: uppercase;
  font-style: italic;
  font-size: 1.7rem;
  font-weight: 900;

  border: 5px solid #fff;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  background-color: #555;
`;