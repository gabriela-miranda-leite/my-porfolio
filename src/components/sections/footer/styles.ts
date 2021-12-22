import styled, {keyframes} from 'styled-components';

const animationSun = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }


`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${({theme}) => theme.colors.text};
  padding: 5rem;

  p {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Ubuntu';
    color: ${({theme}) => theme.colors.textDark};

    img {
      width: 5rem;
      height: 5rem;
      animation: ${animationSun} 4s linear infinite;
    }
  }
  @media (min-width: 600px) {
    padding: 8rem;
    p {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 1070px) {
    p {
      font-size: 3.2rem;
    }
  }
`;

export const ListSocial = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 2rem 0;

  li {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    gap: 5rem;
    padding: 5rem 0;
  }

  @media (min-width: 1070px) {
    padding: 10rem 0;
    gap: 15rem;
  }
`;

export const LogoSocial = styled.img`
  height: 5rem;
  width: 5rem;
  opacity: 0.8;
  transition-delay: 0.2s;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 600px) {
    height: 6rem;
    width: 6rem;
  }
`;

export const Email = styled.a`
  background: ${({theme}) => theme.colors.second};
  padding: 1rem;
  border-radius: 1rem;

  font-family: 'Ubuntu';
  font-size: 1.4rem;
  text-decoration: none;
  color: ${({theme}) => theme.colors.text};
  cursor: pointer;
  transition-delay: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 1070px) {
    p {
      font-size: 2.2rem;
    }
  }
`;
