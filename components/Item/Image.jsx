import * as S from './styled';
import Image from 'next/image';

const ImageComponent = ({ src, alt }) => {
  return (
    <>
      <S.ImageWrapper>
        <Image
          src={src}
          alt={alt}
          layout="fixed"
          width={130}
          height={130}
        />
      </S.ImageWrapper>
    </>
  );
};

export default ImageComponent;
