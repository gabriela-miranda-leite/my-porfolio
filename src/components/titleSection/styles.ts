import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  padding-bottom: 3rem;

  @media (min-width: 600px) {
    padding-bottom: 5rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  position: relative;

  width: 3rem;
  height: 3rem;

  @media (min-width: 400px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const SquareBlue = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({theme}) => theme.colors.second};
  z-index: 2;

  @media (min-width: 400px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const SquareGrey = styled(SquareBlue)`
  background-color: ${({theme}) => theme.colors.text};
  position: absolute;
  top: 25%;
  right: 25%;
`;

export const Title = styled.h3`
  font-family: 'Ubuntu';
  font-weight: 500;
  font-size: 2rem;

  @media (min-width: 350px) {
    font-size: 2.4rem;
  }

  @media (min-width: 650px) {
    font-size: 3.2rem;
  }
`;
