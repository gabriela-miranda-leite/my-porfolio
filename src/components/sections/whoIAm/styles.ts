import styled from 'styled-components';

export const Container = styled.section`
  background: ${({theme}) => theme.colors.primary};
  padding: 5rem 0;

  @media (min-width: 750px) {
    padding: 8rem 0;
  }
`;

export const Content = styled.div`
  @media (min-width: 1070px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    max-width: 136.6rem;
    margin: auto;
  }
`;

export const Photo = styled.div`
  display: none;

  @media (min-width: 1070px) {
    display: flex;
    position: relative;
    height: 40rem;
    width: 40rem;
    flex-direction: column;
  }
`;

export const Profile = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 100%;
`;
export const Clouds = styled.img`
  width: 30rem;
  position: absolute;
  top: 56%;
  right: 50%;
`;

export const Text = styled.p`
  padding: 2rem 2rem 0 2rem;

  @media (min-width: 400px) {
    font-size: 1.8rem;
    padding: 4rem 4rem 0 4rem;
  }

  @media (min-width: 750px) {
    font-size: 2.2rem;
    padding: 6rem 6rem 0 6rem;
  }
  @media (min-width: 800px) {
    font-size: 2.4rem;
  }
`;
