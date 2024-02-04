'use client'

import { FC, memo, useCallback, useRef } from 'react'
import Link from 'next/link'
import GithubLogo from '#components/GithubLogo'

import { useSetRecoilState } from 'recoil'
import { navigationBarVisibleAtom } from '#atoms/navigationBarVisible'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar'

const NavigationBar: FC = () => {
  const currentScrollRef = useRef<number | null>(null)
  const setNavigationBarVisible = useSetRecoilState(navigationBarVisibleAtom)

  const onScrollPositionChange = useCallback(
    (position: number) => {
      if (currentScrollRef.current) {
        if (currentScrollRef.current > position) setNavigationBarVisible(true)
        else setNavigationBarVisible(false)
      }

      currentScrollRef.current = position
    },
    [setNavigationBarVisible],
  )

  return (
    <Navbar
      position="sticky"
      maxWidth="lg"
      className="bg-[hsl(240_5.9%_10%_/_0.6)]"
      shouldHideOnScroll
      onScrollPositionChange={onScrollPositionChange}
    >
      <NavbarBrand>
        <Link href="/">
          <div className="flex gap-x-2 align-middle">
            <svg
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 963.588H279.529V845.941H153.412V177.706H279.529V61H0V963.588Z"
                className="fill-zinc-100"
              />
              <path
                d="M1024 963.588V61H744.471V177.706H870.588V845.941H744.471V963.588H1024Z"
                className="fill-zinc-100"
              />
            </svg>
            <div className="font-semibold">김진근의 Devlog</div>
          </div>
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
  )
}

export default memo(NavigationBar)
