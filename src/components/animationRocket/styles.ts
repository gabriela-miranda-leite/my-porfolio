import styled, {keyframes} from 'styled-components';

const animationRocket = keyframes`
  from {
    transform: translateY(0.5rem);
  }

  to {
    transform: translateY(3rem);
  }
`;

export const Space = styled.img`
  position: relative;
  width: 21rem;

  @media (min-width: 1170px) {
    width: 60rem;
  }
`;

export const Rocket = styled.img`
  width: 15rem;
  position: absolute;
  left: 5rem;
  top: 5rem;

  animation: ${animationRocket} 1.5s infinite alternate-reverse;

  @media (min-width: 1170px) {
    width: 35rem;
    left: 15rem;
    top: 20rem;
  }
`;
