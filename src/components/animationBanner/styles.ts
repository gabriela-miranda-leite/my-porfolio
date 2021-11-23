import styled, {keyframes} from 'styled-components';

const animationRocket = keyframes`
  from {
    transform:translateY(1rem);
  }

  to {
    transform:  translateY(4rem);
  }
`;
export const Container = styled.div`
  position: relative;
`;

export const Space = styled.img`
  width: 21rem;

  @media (min-width: 390px) {
    width: 28rem;
  }
`;

export const Rocket = styled.img`
  width: 14rem;
  position: absolute;
  left: 5rem;
  top: 5rem;
  animation: ${animationRocket} 1.5s infinite alternate-reverse;

  @media (min-width: 390px) {
    width: 20rem;
  }
`;
