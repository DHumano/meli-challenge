import Item from './index';
import * as S from './styled';

const ItemList = ({ items, handleClick }) => {
  return (
    <>
      <S.Container>
        {items.map((elm) => (
          <Item key={elm.id} item={elm} handleClick={handleClick} />
        ))}
      </S.Container>
    </>
  );
};

export default ItemList;
