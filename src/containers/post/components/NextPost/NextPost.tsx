import { FC, useMemo } from 'react';
import { Card, CardBody, Image, Spacer } from '@nextui-org/react';
import { memo } from 'react';
import { Post } from '#types';
import { useNextPost } from './hooks';
import Tag from '#components/Tag';

interface PropsType {
  post: Post;
}

const NextPost: FC<PropsType> = (props) => {
  const { post } = props;
  const { onPress } = useNextPost(post);

  const renderedTags = useMemo(
    () => post.frontMatter.tags.map((item) => <Tag key={item}>{item}</Tag>),
    [post.frontMatter.tags],
  );

  return (
    <>
      <h3 className="font-bold">이어서 읽기</h3>
      <Spacer y={1} />
      <Card
        onPress={onPress}
        isPressable
        className={`flex gap-1 ${
          post.frontMatter.thumbnail ? 'bg-transparent' : 'bg-slate-50'
        }`}
      >
        {post.frontMatter.thumbnail && (
          <Image
            src={post.frontMatter.thumbnail}
            alt={`${post.frontMatter.title} 썸네일`}
            className="aspect-video rounded-lg"
            width={100}
            height={100}
          />
        )}
        <CardBody>
          <div className="text-lg font-bold">{post.frontMatter.title}</div>
          <div className="text-zinc-600 text-base">
            {post.frontMatter.description}
          </div>
          <div className="flex gap-2 mt-4">{renderedTags}</div>
        </CardBody>
      </Card>
    </>
  );
};

export default memo(NextPost);
