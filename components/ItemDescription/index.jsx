import * as S from './styled';
import Image from '../assets/Image';

const ItemDescription = ({ item }) => {
  console.log(item);
  return (
    <>
      {/* <BreadCrumb /> */}breadcrumb
      <S.Wrapper>
        <Image src={item.picture} alt={item.name} width={130} height={130} />
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
