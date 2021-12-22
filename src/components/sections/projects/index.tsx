import {useCallback, useEffect, useState} from 'react';

import DataGithub from '../../../services/github';
import {TitleSection} from '../../titleSection';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';

interface DataProject {
  name: string;
  html_url: string;
  topics: string[];
  description: string;
}

export const Projects = () => {
  const [dataGit, setDataGit] = useState<DataProject[]>([]);
  const [indexProject, setIndexProject] = useState<number>(-1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 2,
  };

  const getDataGithub = useCallback(async () => {
    const result = await DataGithub.getData();

    if (!result.ok) {
      return;
    }

    setDataGit(result.data);
  }, []);

  useEffect(() => {
    getDataGithub();
  }, [getDataGithub]);

  return (
    <S.DesktopWrapper>
      <S.Container>
        <TitleSection title="PROJETOS" />
        <S.Desktop>
          <S.Carousel>
            <Slider {...settings}>
              {dataGit.map((project, index) => (
                <>
                  <S.CardProject
                    key={index}
                    onClick={() => setIndexProject(index)}
                  >
                    <p>{project.name}</p>
                  </S.CardProject>
                </>
              ))}
            </Slider>
          </S.Carousel>

          <S.Content indexProject={indexProject}>
            {indexProject === -1 ? (
              <>
                <h4>*Tecnologias Utilizadas</h4>
                <S.TechImg src="assets/web.png" alt="web" />
              </>
            ) : (
              <>
                <p>
                  <strong>{dataGit[indexProject].name}</strong>
                  <br />
                  <br />
                  {dataGit[indexProject].description}
                  <br />
                  <br />
                  <strong>
                    🧪 Tecnologias utilizadas
                    <br />
                  </strong>
                  <br />
                  {dataGit[indexProject].topics.map((e, index) => (
                    <p key={index}>{e}</p>
                  ))}
                </p>
                <a href={dataGit[indexProject].html_url}>mais informações</a>
              </>
            )}
          </S.Content>

          <S.GridProjects>
            {dataGit.map((project, index) => (
              <li key={index} onClick={() => setIndexProject(index)}>
                <S.CardProject
                  key={index}
                  onClick={() => setIndexProject(index)}
                >
                  <p>{project.name}</p>
                </S.CardProject>
              </li>
            ))}
          </S.GridProjects>
        </S.Desktop>
      </S.Container>
    </S.DesktopWrapper>
  );
};
