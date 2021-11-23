import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  background-color: ${({theme}) => theme.colors.second};
  border: none;
  box-shadow: inset 0px 4px 4px rgba(230, 230, 230, 0.5);
  border-radius: 1rem;
  padding: 1rem;
  transition: all 200ms;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const LogoGitHub = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const ImageLogo = styled.img`
  height: 2rem;
  width: 100%;

  @media (min-width: 390px) {
    height: 3rem;
  }
`;

export const ImageGitHub = styled.img`
  height: 2rem;
  width: 2rem;

  @media (min-width: 390px) {
    height: 3rem;
    width: 3rem;
  }
`;
