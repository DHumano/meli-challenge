import * as S from './styled';
import Image from '../assets/Image';

const Item = ({ item, handleClick }) => {
  const onHandleClick = () => {
    handleClick(item);
  };

  return (
    <>
      <S.Wrapper>
        <div onClick={onHandleClick}>
          <Image src={item.picture} alt={item} width={130} height={130} layout={"fixed"}/>
        </div>
        <S.DataWrapper>
          <S.Price onClick={onHandleClick}>${item.price.amount}</S.Price>
          <S.Title onClick={onHandleClick}>{item.title}</S.Title>
        </S.DataWrapper>
        <S.Paragraph>{item.address}</S.Paragraph>
      </S.Wrapper>
    </>
  );
};

export default Item;
