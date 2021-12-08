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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 6rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.second};
`;

export const List = styled.ul`
  display: flex;
  gap: 15rem;
  list-style: none;

  li {
    font-size: 1.8rem;
    cursor: pointer;
    position: relative;

    &:hover:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        270deg,
        ${({theme}) => theme.colors.text} 0%,
        #17161d 100%
      );
      animation: ${animationLine} 0.3s ease-in-out;
    }
  }
`;
