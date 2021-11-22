import styled, {keyframes} from 'styled-components';

const animationRocket = keyframes`
  from {
    transform:translateY(0.5rem);
  }

  to {
    transform:  translateY(3rem);
  }
`;

export const Container = styled.div``;

export const Space = styled.img`
  width: 21rem;
  position: relative;
`;

export const Rocket = styled.img`
  width: 14rem;
  position: absolute;
  left: 5rem;
  top: 5rem;
  animation: ${animationRocket} 1.5s infinite alternate-reverse;
`;
