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
    {
      img: 'assets/logos/logo-css.png',
      alt: 'Logo CSS',
      text: 'é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site.',
      title: 'CSS',
      projects: 'let-me-ask, portfolio, landing-pages,...',
    },
    {
      img: 'assets/logos/logo-html.png',
      alt: 'Logo HTML',
      text: ' é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.',
      title: 'HTML',
      projects: 'let-me-ask, portfolio, landing-pages,...',
    },
    {
      img: 'assets/logos/logo-javascript.png',
      alt: 'Logo Javascript',
      text: 'é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.',
      title: 'JavaScript',
      projects: 'let-me-ask, portfolio, landing-pages,...',
    },
    {
      img: 'assets/logos/logo-react.png',
      alt: 'Logo React',
      text: 'é uma biblioteca front-end e tem como um de seus objetivos facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes.',
      title: 'React.js',
      projects: 'let-me-ask, portfolio, landing-pages',
    },
    {
      img: 'assets/logos/logo-next.png',
      alt: 'Logo Next',
      text: 'é um framework para React que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web.',
      title: 'Next.js',
      projects: 'portfolio, landing-pages',
    },
    {
      img: 'assets/logos/logo-sass.png',
      alt: 'Logo SASS',
      text: 'é uma linguagem de extensão do CSS. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas que iremos comentar.',
      title: 'Sass',
      projects: 'let-me-ask',
    },
    {
      img: 'assets/logos/logo-flutter.png',
      alt: 'Logo Flutter',
      text: 'é uma biblioteca que utiliza a linguagem Dart para criação de aplicações móveis Cross Platform. Pode criar aplicações para Android e iOS compartilhando parte do código escrito.',
      title: 'Flutter',
      projects: 'Utilizei em projetos da faculdade.',
    },
    {
      img: 'assets/logos/logo-typescript.png',
      alt: 'Logo Typescript',
      text: 'é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.',
      title: 'Typescript',
      projects: 'let-me-ask, portfolio',
    },
    {
      img: 'assets/logos/logo-styled-components.png',
      alt: 'Logo Styled Components',
      text: 'é uma biblioteca construída para desenvolvedores React e React Native. Ele permite que você use estilos de nível de componente em seus aplicativos.',
      title: 'Styled-components',
      projects: 'portfolio, landing-pages',
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
              <p>
                <strong>{dataLogos[indexLogo].title}</strong>
                <br />
                <br />
                {dataLogos[indexLogo].text}
              </p>
            )}
          </S.InfoWrapper>
        </S.Content>
      </S.DesktopWrapper>
    </S.Container>
  );
};
