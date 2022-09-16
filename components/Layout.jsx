import LogoMeli from './common/LogoMeli';
import * as S from './styled';
import Input from './Search/Input';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <S.LogoWrapper onClick={handleClick}>
            <LogoMeli style={{ cursor: 'pointer' }} onClick={handleClick} />
          </S.LogoWrapper>
          <Input />
        </S.Layout>
      </S.Wrapper>
      {children}
    </>
  );
};

export default Layout;
