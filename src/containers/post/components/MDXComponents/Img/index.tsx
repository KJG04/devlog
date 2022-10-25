/* eslint-disable @next/next/no-img-element */
import Image from 'next/future/image';
import { HTMLProps, ImgHTMLAttributes } from 'react';

const Img = (props: HTMLProps<HTMLImageElement>) => {
  const { src, crossOrigin, placeholder, ...rest } = props;

  if (!src) {
    return <>{src} 이미지는 사용할 수 없습니다.</>;
  }

  return (
    <Image
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
      style={{ width: 'auto', height: 'auto' }}
    />
  );
};

export default Img;
