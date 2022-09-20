import * as S from './styled';
import Image from '../assets/Image';
import BreadCrumb from '../BreadCrumb';

const ItemDescription = ({ item }) => {
  return (
    <>
      <BreadCrumb data={item.category} itemName={item.title} />
      <S.Container>
        <S.Wrapper>
          <S.ImageWrapper>
            <Image
              src={item.picture}
              alt={item}
              width={530}
              height={530}
              layout={'responsive'}
            />
          </S.ImageWrapper>
          <S.Information>
            <S.Price>${item.price.amount}</S.Price>
            <S.Title>{item.title}</S.Title>
          ButtonWip
          </S.Information>
        </S.Wrapper>
        <S.DataWrapper>
          <S.Title>Descripción del producto</S.Title>
          <S.Description>{item.description}</S.Description>
        </S.DataWrapper>
      </S.Container>
    </>
  );
};

export default ItemDescription;
