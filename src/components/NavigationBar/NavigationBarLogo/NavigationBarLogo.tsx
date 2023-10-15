import React, { memo } from 'react';
import { NavbarContent } from '@nextui-org/react';
import { useTheme } from 'next-themes';

const DarkLogo = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 963.588H279.529V845.941H153.412V177.706H279.529V61H0V963.588Z"
      fill="white"
    />
    <path
      d="M1024 963.588V61H744.471V177.706H870.588V845.941H744.471V963.588H1024Z"
      fill="white"
    />
  </svg>
));

DarkLogo.displayName = 'DarkLogo';

const LightLogo = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 963.588H279.529V845.941H153.412V177.706H279.529V61H0V963.588Z"
      fill="black"
    />
    <path
      d="M1024 963.588V61H744.471V177.706H870.588V845.941H744.471V963.588H1024Z"
      fill="black"
    />
  </svg>
));

LightLogo.displayName = 'LightLogo';

const NavigationBarLogo: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex gap-x-0.5 align-middle">
      {isDark && <DarkLogo />}
      {!isDark && <LightLogo />}
      <NavbarContent className="block sm:hidden">
        <div className="font-bold">김진근의 Devlog</div>
      </NavbarContent>
    </div>
  );
};

export default memo(NavigationBarLogo);
