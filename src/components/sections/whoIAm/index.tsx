import {TitleSection} from '../../titleSection';
import * as S from './styles';

export const WhoIAm = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Photo>
          <S.Profile src="assets/profile.jpg" alt="Gabriela Miranda" />
          <S.Clouds src="assets/clouds.png" alt="Nuvens" />
        </S.Photo>
        <S.Text>
          <TitleSection title="QUEM SOU" />
          Opa bom dia, sou Gabriela Miranda. Estou cursando Engenharia da
          computação. e também tenho reservado um tempo para conhecer novas
          tecnologias. <br /> <br />
          Iniciei no Front-end em 2021, e estou feliz com essa escolha vejo
          vários caminhos.
        </S.Text>
      </S.Content>
    </S.Container>
  );
};
