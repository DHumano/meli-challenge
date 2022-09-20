import * as S from './styled';

const BreadCrumb = ({ data, itemName }) => {
  const categories = data?.map((elm) => {
    return <S.Category key={elm.id}>{elm.name} | </S.Category>;
  });

  return (
    <S.Container>
      {categories} {itemName}
    </S.Container>
  );
};

export default BreadCrumb;
