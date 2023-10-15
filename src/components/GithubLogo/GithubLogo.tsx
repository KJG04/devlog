import { memo } from 'react';
import GithubLogoIcon from 'public/icon/github-logo.svg';

const GithubLogo = () => {
  return (
    <GithubLogoIcon
      className="w-32 h-32 inline-block fill-gray-900"
      viewBox="0 0 32 32"
      preserveAspectRatio="none"
    />
  );
};

export default memo(GithubLogo);
