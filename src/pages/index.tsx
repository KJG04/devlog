import Home from '#containers/home';
import { getAllPosts } from '#utils';
import { GetStaticProps } from 'next';

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allPost: (await getAllPosts()).map((value) => {
        const date = value.frontMatter.date.toString();
        return { ...value, frontMatter: { ...value.frontMatter, date } };
      }),
    },
  };
};
