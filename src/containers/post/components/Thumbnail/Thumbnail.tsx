import { useStyle } from '#hooks/styles';
import { Image } from '@nextui-org/react';
import { FC, memo } from 'react';
import { FrontMatter } from 'src/types';

interface PropsType {
  frontMatter: FrontMatter;
}

const Thumbnail: FC<PropsType> = (props) => {
  const { frontMatter } = props;

  const imageStyle = useStyle(
    () => ({
      borderRadius: '1rem',
      width: '100%',
      display: 'block',
    }),
    []
  );

  if (!frontMatter.thumbnail) {
    return <></>;
  }

  return (
    <Image
      data-zoomable
      style={imageStyle}
      autoResize
      objectFit="cover"
      showSkeleton
      src={frontMatter.thumbnail}
      alt="blog-thumbnail"
    />
  );
};

export default memo(Thumbnail);
