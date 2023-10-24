import Image from 'next/image';
import { HTMLProps, ImgHTMLAttributes, memo } from 'react';
import IMAGE_LIST, { isInImageList } from 'src/constants/imageList';

const Img = (
  props: Omit<
    HTMLProps<HTMLImageElement>,
    'ref' | 'as' | 'onError' | 'width' | 'height'
  >,
) => {
  const { src, crossOrigin, placeholder, ...rest } = props;

  if (!src) {
    return <div>{src} 이미지는 사용할 수 없습니다.</div>;
  }

  return (
    <Image
      data-zoomable
      {...rest}
      crossOrigin={
        crossOrigin as ImgHTMLAttributes<HTMLImageElement>['crossOrigin']
      }
      placeholder={placeholder as 'blur' | 'empty' | undefined}
      src={isInImageList(src) ? IMAGE_LIST[src] : src}
      alt={src}
      sizes="100vw"
      width={1000}
      height={1000}
    />
  );
};

export default memo(Img) as typeof Img;
