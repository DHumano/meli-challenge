import * as S from './styled';
import Image from '../assets/Image';

const ItemDescription = ({ item }) => {
  return (
    <>
      <S.Paragraph>{item.category}</S.Paragraph>
      <S.Wrapper>
        <div>
          <Image
            src={item.picture}
            alt={item}
            width={530}
            height={530}
            layout={'responsive'}
          />
        </div>
        <S.DataWrapper>
          <S.Price>${item.price.amount}</S.Price>
          <S.Title>{item.title}</S.Title>
        </S.DataWrapper>
        <S.Paragraph>{item.address}</S.Paragraph>
      </S.Wrapper>
    </>
  );
};

export default ItemDescription;
