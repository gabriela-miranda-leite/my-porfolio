import {useState, useEffect} from 'react';

import {TitleSection} from '../../titleSection';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';

export const Knowledge = () => {
  const [indexLogo, setIndexLogo] = useState<number>(-1);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
    slidesToScroll: 3,
    slidesToShow: resizeScreen(),
  };

  const dataLogos = [
    {img: 'assets/logos/logo-css.png', alt: 'Logo CSS', text: 'css'},
    {
      img: 'assets/logos/logo-html.png',
      alt: 'Logo HTML',
      text: 'HTML é uma linguagem de marcação, é utilizada para fins estruturais. HTML encapsula ou marca dados dentro de tags HTML, o navegador então lê e interpreta o conteúdo e consegue exibir diferentemente, títulos, parágrafos, links, tabelas e etc. 8 meses de experiência',
    },
    {
      img: 'assets/logos/logo-javascript.png',
      alt: 'Logo Javascript',
      text: 'js',
    },
    {img: 'assets/logos/logo-react.png', alt: 'Logo React', text: 'react'},
    {img: 'assets/logos/logo-next.png', alt: 'Logo Next', text: 'next'},
    {img: 'assets/logos/logo-sass.png', alt: 'Logo SASS', text: 'sass'},
    {
      img: 'assets/logos/logo-flutter.png',
      alt: 'Logo Flutter',
      text: 'flutter',
    },
    {
      img: 'assets/logos/logo-typescript.png',
      alt: 'Logo Typescript',
      text: 'ts',
    },
    {
      img: 'assets/logos/logo-styled-components.png',
      alt: 'Logo Styled Components',
      text: 'styled components',
    },
  ];

  function resizeScreen() {
    return width < 400 ? 3 : width < 530 ? 4 : 6;
  }

  return (
    <S.Container>
      <S.DesktopWrapper>
        <S.LogoWrapper>
          <TitleSection title="CONHECIMENTOS" />
          <S.GridLogos>
            {dataLogos.map((logo, index) => (
              <li key={index} onClick={() => setIndexLogo(index)}>
                <S.Logo src={logo.img} alt={logo.alt} />
              </li>
            ))}
          </S.GridLogos>
        </S.LogoWrapper>
        <S.Content>
          <S.Carousel>
            <Slider {...settings}>
              {dataLogos.map((logo, index) => (
                <div key={index} onClick={() => setIndexLogo(index)}>
                  <S.Logo src={logo.img} alt={logo.alt} />
                </div>
              ))}
            </Slider>
          </S.Carousel>

          <S.InfoWrapper indexLogo={indexLogo}>
            {indexLogo === -1 ? (
              <>
                <h4>*Selecione o card</h4>
                <S.KnowledgeImg src="assets/carousel.png" alt="Conhecimentos" />
              </>
            ) : (
              <p>{dataLogos[indexLogo].text}</p>
            )}
          </S.InfoWrapper>
        </S.Content>
      </S.DesktopWrapper>
    </S.Container>
  );
};
