import styled, {keyframes} from 'styled-components';

const animationRocket = keyframes`
  from {
    transform: translateY(0.5rem);
  }

  to {
    transform: translateY(3rem);
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Space = styled.img`
  width: 20rem;

  @media (min-width: 400px) {
    width: 30rem;
  }

  @media (min-width: 600px) {
    width: 40rem;
  }

  @media (min-width: 1070px) {
    width: 60rem;
  }
`;

export const Rocket = styled.img`
  width: 15rem;
  position: absolute;
  left: 5rem;
  top: 5rem;

  animation: ${animationRocket} 1.5s infinite alternate-reverse;

  @media (min-width: 400px) {
    width: 20rem;
    left: 10rem;
    top: 10rem;
  }

  @media (min-width: 600px) {
    width: 20rem;
    left: 15rem;
    top: 15rem;
  }

  @media (min-width: 1070px) {
    width: 35rem;
    left: 15rem;
    top: 20rem;
  }
`;
