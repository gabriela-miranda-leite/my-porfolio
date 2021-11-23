import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 5rem 3rem;
  width: 100vw;
  height: 36rem;
`;

export const Content = styled.p`
  width: 100%;
  padding-top: 3rem;
  font-weight: 500;
  font-size: 1.6rem;
`;
