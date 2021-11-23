import * as S from './styles';
import Router from 'next/router';

export const ButtonBanner = () => {
  function handleClick() {
    Router.push(`https://github.com/Gabriela-Leite`);
  }

  return (
    <S.Button onClick={handleClick}>
      <S.LogoGitHub>
        <S.ImageLogo
          src="assets/logos/logo-github-button-banner.png"
          alt="Logo do GitHub"
        />
        <S.ImageGitHub
          src="assets/logos/github-button-banner.png"
          alt="GitHub"
        />
      </S.LogoGitHub>
      .
    </S.Button>
  );
};
