import {AnimationBanner} from '../../animationBanner';
import {ButtonBanner} from '../../buttonBanner';
import {ButtonSideBar} from '../../buttonSideBar';
import {Logo} from '../../logo';
import * as S from './styles';

export const Portfolio = () => {
  return (
    <S.Container>
      <S.SideBar>
        <ButtonSideBar />
      </S.SideBar>
      <Logo />
      <S.Ocupation>Developer Front-End</S.Ocupation>
      <ButtonBanner />
      <S.Animation>
        <AnimationBanner />
      </S.Animation>
    </S.Container>
  );
};
