import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 1rem;
  height: 5rem;
  width: 5rem;
  background-color: transparent;
  border: 3px solid ${({theme}) => theme.colors.second};
  padding: 1.2rem 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 530px) {
    display: none;
  }
`;

export const Bar = styled.div`
  width: 3.5rem;
  height: 0.2rem;
  background-color: ${({theme}) => theme.colors.text};
`;
