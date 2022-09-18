import * as S from './styled';
import Image from 'next/image';

const ImageComponent = ({ src, alt, width, height }) => {
  return (
    <>
      <S.ImageWrapper>
        <Image
          src={src}
          alt={alt}
          layout="fixed"
          width={width}
          height={height}
        />
      </S.ImageWrapper>
    </>
  );
};

export default ImageComponent;
