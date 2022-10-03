/* eslint-disable @next/next/no-img-element */
import { Image, ImageProps } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { HTMLProps } from 'react';

const Zoom = dynamic(() => import('react-medium-image-zoom'), { ssr: false });

function Img(props: HTMLProps<HTMLImageElement>) {
  const { src, ...rest } = props;

  if (!src) {
    return <p>Currently, image is not available. {src}</p>;
  }

  if (src.startsWith('http')) {
    return (
      <Zoom>
        <img src={src} alt={src} />
      </Zoom>
    );
  }

  return (
    <Zoom>
      <Image
        {...(rest as ImageProps)}
        alt={src}
        crossOrigin="anonymous"
        src={src}
        placeholder="empty"
        objectFit="contain"
        css={{
          height: 'auto',
          width: 'auto',
        }}
      />
    </Zoom>
  );
}

export default Img;
