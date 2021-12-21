import styled, {keyframes} from 'styled-components';

const animationCloud = keyframes`
  from {
    transform: translateX(0.5rem);
  }

  to {
    transform: translateX(3rem);
  }
`;

export const Container = styled.section.attrs({
  id: 'who-i-am',
})`
  background: ${({theme}) => theme.colors.primary};
  padding: 5rem;

  @media (min-width: 750px) {
    padding: 8rem;
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
  animation: ${animationCloud} 1.5s infinite alternate-reverse;
`;

export const Text = styled.div`
  font-size: 1.6rem;

  @media (min-width: 750px) {
    font-size: 2.2rem;
  }
`;

export const TextContent = styled.div`
  @media (min-width: 1070px) {
    display: flex;
    flex-direction: column;
  }
`;
