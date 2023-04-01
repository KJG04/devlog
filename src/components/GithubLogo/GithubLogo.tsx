import Image from 'next/image';
import { memo } from 'react';
import { useIconPath } from './hook';

const GithubLogo = () => {
  const icon = useIconPath();

  return (
    <Image src={icon} alt="github-logo" layout="fixed" width={30} height={30} />
  );
};

export default memo(GithubLogo);
