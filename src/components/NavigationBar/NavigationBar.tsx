import { Navbar, NavbarBrand, NavbarContent, Switch } from '@nextui-org/react';
import { FC, memo } from 'react';
import Link from 'next/link';
import { useThemeSwitch } from './hooks';
import NavigationBarLogo from '#components/NavigationBar/NavigationBarLogo';
import MoonIcon from '#components/NavigationBar/MoonIcon';
import SunIcon from '#components/NavigationBar/SunIcon/SunIcon';
import GithubLogo from '#components/GithubLogo';
import MountOnly from '#components/MountOnly/MountOnly';

const sunIcon = <SunIcon />;
const moonIcon = <MoonIcon />;

const switchFallback = (
  <Switch
    size="lg"
    aria-label="theme toggle"
    startContent={sunIcon}
    endContent={moonIcon}
    key="fallback"
  />
);

const NavigationBar: FC = () => {
  const { checked, onChangeTheme } = useThemeSwitch();

  return (
    <Navbar position="sticky" maxWidth="lg" className="bg-navbar">
      <NavbarBrand>
        <Link href="/" passHref>
          <NavigationBarLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Link href="https://github.com/KJG04" target="_blank">
          <GithubLogo />
        </Link>
        <MountOnly fallback={switchFallback}>
          <Switch
            onValueChange={onChangeTheme}
            isSelected={checked}
            size="lg"
            startContent={sunIcon}
            endContent={moonIcon}
            aria-label="theme toggle"
          />
        </MountOnly>
      </NavbarContent>
    </Navbar>
  );
};

export default memo(NavigationBar);
