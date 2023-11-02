import GithubLogo from '#components/GithubLogo';
import { Link, Spacer } from '@nextui-org/react';
import { FC, memo } from 'react';

const Footer: FC = () => {
  return (
    <div>
      <div className="flex gap-x-[1rem] justify-center">
        <Link
          href="mailto:freedom7113@gmail.com"
          aria-label="이메일을 보내려면 여기를 클릭하세요"
        >
          <svg
            width={30}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              className="fill-zinc-900 dark:fill-zinc-100"
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </svg>
        </Link>
        <Link
          href="https://github.com/KJG04"
          target="_blank"
          aria-label="Github에 방문하고 싶으시면 여기를 클릭하세요"
        >
          <GithubLogo />
        </Link>
      </div>
      <Spacer y={4} />
      <div className="text-center">김진근 • © {new Date().getFullYear()}</div>
      <Spacer y={4} />
    </div>
  );
};

export default memo(Footer);
