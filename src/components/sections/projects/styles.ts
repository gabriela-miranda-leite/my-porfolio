import styled from 'styled-components';

interface InfoProject {
  indexProject: number;
}

export const Container = styled.section.attrs({
  id: 'projects',
})`
  display: flex;
  flex-direction: column;

  padding: 5rem;
  margin: auto;

  .slick-dots li button::before {
    color: ${({theme}) => theme.colors.text};
  }

  .slick-dots li.slick-active button::before {
    color: ${({theme}) => theme.colors.second};
  }

  @media (min-width: 750px) {
    padding: 8rem;
  }
`;

export const Carousel = styled.div`
  @media (min-width: 1300px) {
    display: none;
  }
`;

export const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;

  background: ${({theme}) => theme.colors.second};
  width: 10rem;
  height: 8rem;
  padding: 0.5rem;
  cursor: pointer;

  p {
    font-size: 1.4rem;
    font-weight: 700;
    font-family: 'Ubuntu';
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 420px) {
    width: 15rem;
    height: 10rem;
  }

  @media (min-width: 530px) {
    width: 20rem;
    height: 12rem;
  }

  @media (min-width: 750px) {
    width: 20rem;

    p {
      font-size: 1.8rem;
    }
  }
`;

export const Content = styled.div<InfoProject>`
  display: flex;
  flex-direction: column;
  align-items: ${({indexProject}) =>
    indexProject === -1 ? 'center' : 'start'};

  background: ${({theme}) => theme.colors.primary};
  margin-top: 5rem;
  padding: 1rem;
  width: 100%;

  h4 {
    width: 100%;
    display: flex;
    font-size: 1.6rem;
    font-weight: 500;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
  }

  a {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    color: ${({theme}) => theme.colors.textDark};

    font-size: 1.4rem;
    font-family: 'Ubuntu';
    font-weight: 500;
    transition-delay: 0.2s;

    &:hover {
      color: ${({theme}) => theme.colors.text};
    }
  }

  @media (min-width: 750px) {
    padding: 2rem;

    h4 {
      font-size: 2.2rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 1300px) {
    padding: 5rem;
    margin-top: 0rem;
    width: 50rem;
    height: 50rem;

    h4 {
      font-size: 2.2rem;
    }

    p {
      font-size: 2.2rem;
    }
  }
`;

export const TechImg = styled.img`
  width: 10rem;
  padding-top: 2rem;

  opacity: 0.7;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 750px) {
    width: 20rem;
    padding-top: 3rem;
  }

  @media (min-width: 1070px) {
    width: 25rem;
    padding-top: 3rem;
  }
`;

export const GridProjects = styled.ul`
  display: none;

  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-self: flex-start;
    gap: 2rem;
    list-style: none;
    padding-left: 3rem;

    li {
      transition: 0.3s ease;
      transition-delay: 0.2s;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const DesktopWrapper = styled.div`
  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20rem;
  }
`;

export const Desktop = styled.div`
  @media (min-width: 1300px) {
    display: flex;
  }
`;
