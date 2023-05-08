import { memo } from 'react';
import GithubLogoIcon from 'public/icon/github-logo.svg';
import styled from '@emotion/styled';

const GithubLogo = () => {
  return (
    <Logo
      width={30}
      height={30}
      viewBox="0 0 30 30"
      preserveAspectRatio="none"
    />
  );
};

export default memo(GithubLogo);

const Logo = styled(GithubLogoIcon)`
  path {
    fill: ${({ theme }) => theme.colors.gray900.value};
    width: 30px;
    height: 30px;
    display: inline-block;
  }
`;
