import {AnimationRocket} from '../../animationRocket';
import {ButtonGitHub} from '../../buttonGitHub';
import {Logo} from '../../logo';
import {Navbar} from '../../navbar';

import * as S from './styles';

export const Banner = () => {
  return (
    <S.Container>
      <S.NavbarWrapper>
        <Navbar />
      </S.NavbarWrapper>

      <S.Content>
        <S.InfoContainer>
          <Logo />
          <S.Subtitle>Developer Front-End</S.Subtitle>
          <ButtonGitHub />
        </S.InfoContainer>

        <S.AnimationRocketWrapper>
          <AnimationRocket />
        </S.AnimationRocketWrapper>
      </S.Content>
    </S.Container>
  );
};
