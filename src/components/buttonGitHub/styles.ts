import styled from 'styled-components';

export const Container = styled.button`
  width: 10rem;
  height: 4rem;
  background: ${({theme}) => theme.colors.second};
  border: none;
  border-radius: 1rem;
  box-shadow: inset 0px 4px 4px rgba(230, 230, 230, 0.5);

  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 400px) {
    width: 12.5rem;
    height: 5rem;
  }

  @media (min-width: 750px) {
    width: 15rem;
    height: 6rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    height: 50%;
  }
`;
