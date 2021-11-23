import * as S from './styles';

interface TitleProps {
  title: string;
}

export const TitleSection = ({title}: TitleProps) => {
  return (
    <S.Container>
      <S.SquaresContainer>
        <S.SquareGrey />
        <S.SquareBlue />
      </S.SquaresContainer>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
