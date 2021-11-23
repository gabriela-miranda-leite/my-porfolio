import styled from 'styled-components';

export const Container = styled.footer`
  width: 100vw;
  padding: 5rem 3rem;
  background-color: ${({theme}) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: 'Ubuntu';
  font-weight: 500;
  font-size: 2.2rem;
  color: ${({theme}) => theme.colors.textDark};
`;

export const ListSociais = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  padding: 5rem 0rem;
`;

export const IconSociais = styled.li`
  img {
    height: 5rem;
    width: 5rem;
  }
`;

export const Email = styled.button`
  border-radius: 8rem;
  border: none;
  background-color: ${({theme}) => theme.colors.second};
  padding: 0.5rem 1.5rem;
  color: ${({theme}) => theme.colors.text};
  transition: all 200ms;

  &:hover {
    filter: brightness(0.8);
  }
`;
