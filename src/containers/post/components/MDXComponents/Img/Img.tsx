import styled from '@emotion/styled';
import Image from 'next/future/image';
import { HTMLProps, ImgHTMLAttributes, memo } from 'react';

const Img = (props: HTMLProps<HTMLImageElement>) => {
  const { src, crossOrigin, placeholder, ...rest } = props;

  if (!src) {
    return <div>{src} 이미지는 사용할 수 없습니다.</div>;
  }

  return (
    <StyledImage
      data-zoomable
      {...rest}
      crossOrigin={
        crossOrigin as ImgHTMLAttributes<HTMLImageElement>['crossOrigin']
      }
      placeholder={placeholder as 'blur' | 'empty' | undefined}
      src={src}
      alt={src}
      width="0"
      height="0"
      sizes="100vw"
    />
  );
};

export default memo(Img) as typeof Img;

const StyledImage = styled(Image)`
  width: auth;
  height: auto;
`;
