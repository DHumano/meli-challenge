import { useState } from 'react';
import * as S from './styled';
import SearchIcon from '../common/SearchIcon';
import { useRouter } from 'next/router';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleInputSubmit = (event) => {
    event.preventDefault();
    // Se cambia link por router, para obtener evento key Enter
    router.push({
      pathname: '/items',
      query: `search=${inputValue}`,
    });
  };

  const handleChangeInputValue = (event) => {
    setInputValue((prevState) => {
      return event.target.value;
    });
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleInputSubmit}>
        <S.Input
          placeholder="Nunca dejes de buscar"
          value={inputValue}
          onChange={handleChangeInputValue}
        />
      </S.Form>
      <S.Wrapper onClick={handleInputSubmit}>
        <SearchIcon />
      </S.Wrapper>
    </S.Container>
  );
};

export default Input;
