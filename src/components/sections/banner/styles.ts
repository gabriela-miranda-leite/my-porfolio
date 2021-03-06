import styled from 'styled-components';

export const Container = styled.section.attrs({
  id: 'banner',
})`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 3rem 10rem;

  @media (min-width: 750px) {
    padding: 8rem;
  }

  @media (min-width: 1070px) {
    padding: 0;
  }
`;

export const NavbarWrapper = styled.div`
  display: none;

  @media (min-width: 1070px) {
    display: flex;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;

  @media (min-width: 1070px) {
    height: calc(100vh - 6rem);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 136.6rem;
    margin: auto;
    gap: 5rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1070px) {
    font-size: 3.2rem;
  }
`;

export const AnimationRocketWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;
