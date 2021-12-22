import Router from 'next/router';

import * as S from './styles';

export const ButtonGitHub = () => {
  function handleClick() {
    Router.push('https://github.com/Gabriela-Leite');
  }
  return (
    <S.Container onClick={handleClick}>
      <S.Content>
        <img
          src="assets/logos/logo-github-button-banner.png"
          alt="Logo do GitHub"
        />
        <img src="assets/logos/github-button-banner.png" alt="GitHub" />
      </S.Content>
    </S.Container>
  );
};
