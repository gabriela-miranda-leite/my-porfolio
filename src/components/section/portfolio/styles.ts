import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem;
  width: 100vw;
  height: 100vh;
`;

export const SideBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;

  @media (min-width: 390px) {
    padding-bottom: 5rem;
  }
`;

export const Ocupation = styled.h3`
  font-weight: 500;
  font-size: 1.8rem;
  padding: 1rem 0rem;
`;

export const Animation = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;

  @media (min-height: 800px) {
    padding-top: 10rem;
  }
`;
