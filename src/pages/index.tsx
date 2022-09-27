import { Link } from "@nextui-org/react";
import type { GetStaticProps, NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Link href="/post/2022-09/first" color="error">
        첫번째 게시물
      </Link>
      <Link href="/post/2022-09/second" color="primary">
        두번째 게시물
      </Link>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
