import { Image } from '@nextui-org/react';
import { FC, memo } from 'react';
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
      className="rounded-[1rem] w-[100%] block"
      src={frontMatter.thumbnail}
      alt="blog-thumbnail"
      width={976}
    />
  );
};

export default memo(Thumbnail);
