import Home from '#containers/home';
import { getRecentPosts } from '#utils';
import { GetStaticProps } from 'next';

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      recentlyPost: (await getRecentPosts()).map((value) => {
        const date = value.frontMatter.date.toString();
        return { ...value, frontMatter: { ...value.frontMatter, date } };
      }),
    },
  };
};
