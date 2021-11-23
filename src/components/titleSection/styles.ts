import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const SquaresContainer = styled.div`
  position: relative;
`;

export const SquareGrey = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${({theme}) => theme.colors.text};
`;

export const SquareBlue = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${({theme}) => theme.colors.second};
`;

export const Title = styled.h3`
  padding-left: 2rem;
  font-weight: 500;
  font-family: 'Ubuntu';
  font-size: 2.2rem;
  color: ${({theme}) => theme.colors.text};
`;
