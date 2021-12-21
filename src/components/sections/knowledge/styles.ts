import styled from 'styled-components';

interface InfoLogo {
  indexLogo: number;
}

export const Container = styled.section.attrs({
  id: 'knowledge',
})`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: ${({theme}) => theme.colors.knowledge};
  padding: 5rem;
  margin: auto;

  @media (min-width: 750px) {
    padding: 8rem;
  }
`;

export const Content = styled.div`
  .slick-dots li.slick-active button::before {
    opacity: 0.75;
    color: ${({theme}) => theme.colors.primary};
  }
`;

export const Logo = styled.img`
  width: 6rem;
  height: 6rem;
  cursor: pointer;

  @media (min-width: 750px) {
    width: 8rem;
    height: 8rem;
  }

  @media (min-width: 1070px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const Carousel = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const GridLogos = styled.ul`
  display: none;

  @media (min-width: 1200px) {
    display: block;
    list-style: none;
    column-count: 3;

    li {
      padding: 2rem;
      transition: 0.3s ease;
      transition-delay: 0.2s;

      &:hover {
        transform: rotateY(180deg);
        opacity: 0.4;
      }
    }
  }
`;

export const DesktopWrapper = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20rem;
  }
`;

export const InfoWrapper = styled.div<InfoLogo>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({indexLogo}) => (indexLogo === -1 ? 'center' : 'start')};

  background: ${({theme}) => theme.colors.second};
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

  @media (min-width: 750px) {
    padding: 2rem;

    h4 {
      font-size: 2.2rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 1200px) {
    align-items: ${({indexLogo}) => (indexLogo === -1 ? 'center' : 'start')};
    justify-content: start;

    padding: 5rem;
    margin-top: 0rem;
    width: 50rem;
    height: 50rem;

    h4 {
      font-size: 2.2rem;
    }

    p {
      font-size: 2.4rem;
    }
  }
`;

export const KnowledgeImg = styled.img`
  width: 10rem;
  padding-top: 2rem;

  @media (min-width: 750px) {
    width: 20rem;
    padding-top: 3rem;
  }

  @media (min-width: 1070px) {
    width: 25rem;
    padding-top: 3rem;
  }
`;
