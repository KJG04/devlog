import Giscus from '@giscus/react'
import { memo } from 'react'

const Comment: React.FC = () => {
  return (
    <div>
      <Giscus
        id="comments"
        repo="KJG04/devlog"
        repoId="R_kgDOIBiesw"
        category="Announcements"
        categoryId="DIC_kwDOIBies84Caoqd"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={'dark'}
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}

export default memo(Comment)
