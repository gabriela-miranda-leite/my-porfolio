import * as S from './styles';

export const Navbar = () => {
  return (
    <S.Container>
      <S.Content>
        <S.List>
          <li>
            <a href="#banner">Início</a>
          </li>
          <li>
            <a href="#who-i-am">Quem sou</a>
          </li>
          <li>
            <a href="#knowledge">Conhecimentos</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
        </S.List>
      </S.Content>
    </S.Container>
  );
};
