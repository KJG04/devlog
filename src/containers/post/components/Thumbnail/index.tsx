import { Image } from '@nextui-org/react';
import { FC } from 'react';
import { FrontMatter } from 'src/types';

interface PropsType {
  frontMatter: FrontMatter;
}

const Thumbnail: FC<PropsType> = (props) => {
  const { frontMatter } = props;

  if (!frontMatter.thumbnail) {
    return <></>;
  }

  return (
    <Image
      data-zoomable
      style={{
        borderRadius: '1rem',
        width: '100%',
        display: 'block',
      }}
      autoResize
      objectFit="cover"
      showSkeleton
      src={frontMatter.thumbnail}
      alt="blog-thumbnail"
    />
  );
};

export default Thumbnail;
