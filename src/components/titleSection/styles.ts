import styled from 'styled-components';

export const Container = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const SquareBlue = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${({theme}) => theme.colors.second};
`;

export const SquareGrey = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${({theme}) => theme.colors.text};
`;
