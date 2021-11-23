import * as S from './styles';

export const Footer = () => {
  return (
    <S.Container>
      <S.Title>Opa, bom dia! ☀️</S.Title>
      <S.ListSociais>
        <S.IconSociais>
          <img src="assets/logos/logo-discord.png" alt="discord" />
        </S.IconSociais>
        <S.IconSociais>
          <img src="assets/logos/logo-linkedin.png" alt="linkedin" />
        </S.IconSociais>
        <S.IconSociais>
          <img src="assets/logos/logo-github-black.png" alt="github" />
        </S.IconSociais>
        <S.IconSociais>
          <img src="assets/logos/logo-instagram.png" alt="instagram" />
        </S.IconSociais>
      </S.ListSociais>
      <S.Email>📫 gabrielamiranda11.10@gmail.com</S.Email>
    </S.Container>
  );
};
