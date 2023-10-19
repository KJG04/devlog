import { Navbar, NavbarBrand, NavbarContent, Switch } from '@nextui-org/react';
import { FC, memo, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useThemeSwitch } from './hooks';
import NavigationBarLogo from '#components/NavigationBar/NavigationBarLogo';
import MoonIcon from '#components/NavigationBar/MoonIcon';
import SunIcon from '#components/NavigationBar/SunIcon/SunIcon';
import GithubLogo from '#components/GithubLogo';
import MountOnly from '#components/MountOnly/MountOnly';
import { useSetRecoilState } from 'recoil';
import { navigationBarVisibleAtom } from '#atoms/navigationBarVisible';

const sunIcon = <SunIcon />;
const moonIcon = <MoonIcon />;

const switchClassNames = {
  wrapper: 'mr-0',
};

const switchFallback = (
  <Switch
    size="lg"
    aria-label="theme toggle"
    startContent={sunIcon}
    endContent={moonIcon}
    key="fallback"
    classNames={switchClassNames}
  />
);

const NavigationBar: FC = () => {
  const { checked, onChangeTheme } = useThemeSwitch();
  const currentScrollRef = useRef<number | null>(null);
  const setNavigationBarVisible = useSetRecoilState(navigationBarVisibleAtom);

  const onScrollPositionChange = useCallback(
    (position: number) => {
      if (currentScrollRef.current) {
        if (currentScrollRef.current > position) setNavigationBarVisible(true);
        else setNavigationBarVisible(false);
      }

      currentScrollRef.current = position;
    },
    [setNavigationBarVisible],
  );

  return (
    <Navbar
      position="sticky"
      maxWidth="lg"
      className="bg-navbar"
      shouldHideOnScroll
      onScrollPositionChange={onScrollPositionChange}
    >
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
            classNames={switchClassNames}
          />
        </MountOnly>
      </NavbarContent>
    </Navbar>
  );
};

export default memo(NavigationBar);
