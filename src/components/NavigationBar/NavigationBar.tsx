import { Navbar, NavbarBrand, NavbarContent, Switch } from '@nextui-org/react';
import { FC, memo } from 'react';
import Link from 'next/link';
import { useThemeSwitch } from './hooks';
import NavigationBarLogo from '#components/NavigationBar/NavigationBarLogo';
import MoonIcon from '#components/NavigationBar/MoonIcon';
import SunIcon from '#components/NavigationBar/SunIcon/SunIcon';
import GithubLogo from '#components/GithubLogo';

const NavigationBar: FC = () => {
  const { checked, onChangeTheme } = useThemeSwitch();

  return (
    <Navbar position="sticky" maxWidth="sm" slot="">
      <NavbarBrand>
        <Link href="/" passHref>
          <NavigationBarLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <Link href="https://github.com/KJG04" target="_blank">
          <GithubLogo />
        </Link>
        <Switch
          onValueChange={onChangeTheme}
          isSelected={checked}
          size="lg"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
          aria-label="theme toggle"
        />
      </NavbarContent>
    </Navbar>
  );
};

export default memo(NavigationBar);
