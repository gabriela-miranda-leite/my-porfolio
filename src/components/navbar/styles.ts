import styled, {keyframes} from 'styled-components';

const animationLine = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 6rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.second};
  background: ${({theme}) => theme.colors.background};
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    font-size: 1.8rem;
    cursor: pointer;
    position: relative;
    transition-delay: 0.2s;

    a {
      text-decoration: none;
      color: ${({theme}) => theme.colors.text};
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }

    &:hover:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        270deg,
        ${({theme}) => theme.colors.text} 0%,
        ${({theme}) => theme.colors.textDark} 100%
      );
      animation: ${animationLine} 0.3s ease-in-out;
    }
  }

  @media (min-width: 600px) {
    gap: 5rem;
  }

  @media (min-width: 1070px) {
    gap: 15rem;
  }
`;
