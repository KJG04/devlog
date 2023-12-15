import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { FC, memo, useCallback, useRef } from 'react';
import Link from 'next/link';
import NavigationBarLogo from '#components/NavigationBar/NavigationBarLogo';
import GithubLogo from '#components/GithubLogo';

import { useSetRecoilState } from 'recoil';
import { navigationBarVisibleAtom } from '#atoms/navigationBarVisible';

const NavigationBar: FC = () => {
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
      className="bg-[hsl(240_5.9%_10%_/_0.6)]"
      shouldHideOnScroll
      onScrollPositionChange={onScrollPositionChange}
    >
      <NavbarBrand>
        <Link href="/" passHref>
          <NavigationBarLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Link
          href="https://github.com/KJG04"
          target="_blank"
          aria-label="Github에 방문하고 싶으시면 여기를 클릭하세요"
        >
          <GithubLogo />
        </Link>
      </NavbarContent>
    </Navbar>
  );
};

export default memo(NavigationBar);
