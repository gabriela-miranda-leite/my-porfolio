import * as S from './styles';

interface TitleProps {
  title: string;
}

export const TitleSection = ({title}: TitleProps) => {
  return (
    <S.Container>
      <S.SquareGrey />
      <S.SquareBlue />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
