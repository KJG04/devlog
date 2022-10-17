import { Navbar, Switch } from '@nextui-org/react';
import { FC } from 'react';
import Link from 'next/link';
import { useThemeSwitch } from './hooks';
import NavigationBarLogo from '#components/NavigationBar/NavigationBarLogo';
import MoonIcon from '#components/NavigationBar/MoonIcon';
import SunIcon from '#components/NavigationBar/SunIcon';
import GithubLogo from '#components/NavigationBar/GithubLogo';

const NavigationBar: FC = () => {
  const { checked, onChangeTheme } = useThemeSwitch();

  return (
    <Navbar
      shouldHideOnScroll
      variant="sticky"
      css={{
        background: 'var(--nextui--navbarBlurBackgroundColor)',
        backdropFilter: 'saturate(180%) blur(var(--nextui--navbarBlur))',
        borderBottom:
          'var(--nextui--navbarBorderWeight) solid var(--nextui--navbarBorderColor)',
        boxShadow: '$md',
        '.nextui-navbar-container': {
          background: 'transparent',
          backdropFilter: 'none',
          marginTop: '$md',
          paddingBottom: '$md',
          marginLeft: 'calc(2 * var(--nextui-space-sm))',
          marginRight: 'calc(2 * var(--nextui-space-sm))',
        },
      }}
      maxWidth="sm"
      isCompact
    >
      <Navbar.Brand>
        <Link href="/" passHref>
          <a>
            <NavigationBarLogo />
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link href="https://github.com/KJG04" target="_blank">
          <GithubLogo />
        </Navbar.Link>
        <Switch
          onChange={onChangeTheme}
          checked={checked}
          size="xl"
          iconOn={<SunIcon />}
          iconOff={<MoonIcon />}
          aria-label="theme toggle"
        />
      </Navbar.Content>
    </Navbar>
  );
};

export default NavigationBar;
