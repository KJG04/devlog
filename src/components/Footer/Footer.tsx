import EmailLogo from '#components/EmailLogo'
import GithubLogo from '#components/GithubLogo'
import { Link } from '@nextui-org/link'
import { Spacer } from '@nextui-org/spacer'
import { FC, memo } from 'react'

const Footer: FC = () => {
  return (
    <div>
      <div className="mt-24 flex justify-center gap-x-[1rem]">
        <Link
          href="mailto:freedom7113@gmail.com"
          aria-label="이메일을 보내려면 여기를 클릭하세요"
        >
          <EmailLogo />
        </Link>
        <Link
          href="https://github.com/KJG04"
          target="_blank"
          aria-label="Github에 방문하고 싶으시면 여기를 클릭하세요"
        >
          <GithubLogo />
        </Link>
      </div>
      <Spacer y={4} />
      <div className="text-center">김진근 • © {new Date().getFullYear()}</div>
      <Spacer y={4} />
    </div>
  )
}

export default memo(Footer)
