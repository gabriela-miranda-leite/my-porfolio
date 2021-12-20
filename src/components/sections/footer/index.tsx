import * as S from './styles';

export const Footer = () => {
  const dataSocial = [
    {img: 'assets/logos/logo-discord.png', alt: 'Logo Discord', link: ''},
    {
      img: 'assets/logos/logo-linkedin.png',
      alt: 'Logo Linkedin',
      link: 'https://www.linkedin.com/in/gabriela-miranda-315132204/',
    },
    {
      img: 'assets/logos/logo-github-black.png',
      alt: 'Logo Github',
      link: 'https://github.com/Gabriela-Leite',
    },
    {
      img: 'assets/logos/logo-instagram.png',
      alt: 'Logo Instagram',
      link: 'https://www.instagram.com/_gmsl/',
    },
  ];

  return (
    <S.Container>
      <p>
        Opa, bom dia! &nbsp;<strong> ☀️</strong>
      </p>
      <S.ListSocial>
        {dataSocial.map((social, index) => (
          <li key={index}>
            <a href={social.link}>
              <S.LogoSocial src={social.img} alt={social.alt} />
            </a>
          </li>
        ))}
      </S.ListSocial>
      <S.Email href="mailto:gabrielamiranda11.10@gmail.com">
        gabrielamiranda11.10@gmail.com
      </S.Email>
    </S.Container>
  );
};
