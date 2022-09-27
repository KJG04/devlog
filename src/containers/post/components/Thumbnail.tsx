import { Image } from '@nextui-org/react';
import { FC } from 'react';
import { FrontMatter } from 'types';
import Zoom from 'react-medium-image-zoom';

interface PropsType {
  frontMatter: FrontMatter;
}

const Thumbnail: FC<PropsType> = (props) => {
  const { frontMatter } = props;

  if (!frontMatter.thumbnail) {
    return <></>;
  }

  return (
    <Zoom>
      <Image
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
    </Zoom>
  );
};

export default Thumbnail;
