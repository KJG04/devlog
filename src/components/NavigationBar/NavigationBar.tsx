'use client'

import { FC, useCallback, useRef } from 'react'
import GithubLogo from '#components/GithubLogo'
import { useNavigationBarVisibleStore } from '#utils/navigationBarVisible'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'

const NavigationBar: FC = () => {
  const currentScrollRef = useRef<number | null>(null)
  const { setVisibleFalse, setVisibleTrue } = useNavigationBarVisibleStore()

  const onScrollPositionChange = useCallback(
    (position: number) => {
      if (currentScrollRef.current) {
        if (currentScrollRef.current > position) setVisibleTrue()
        else setVisibleFalse()
      }

      currentScrollRef.current = position
    },
    [setVisibleFalse, setVisibleTrue],
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
        <Link href="/" color="foreground">
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
            <div className="font-semibold">김진근의 devlog</div>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
        <div className="select-none text-zinc-500">/</div>
        <NavbarItem>
          <Link
            href="https://github.com/KJG04"
            target="_blank"
            aria-label="Github에 방문하고 싶으시면 여기를 클릭하세요"
          >
            <GithubLogo />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavigationBar
