import BeforeCodeSplit from 'public/post-images/before-code-split.png'
import AfterCodeSplit from 'public/post-images/after-code-split.png'
import PhaserBundleSize from 'public/post-images/phaser-bundle-size.png'
import CodeSplitSlackMessage from 'public/post-images/code-split-slack-message.png'
import RouterCodeSplitThumbnail from 'public/post-images/router-code-split-thumbnail.jpg'
import MessageBetweenAppAndWebThumbnail from 'public/post-images/message-between-app-and-web-thumbnail.jpg'
import MigrateToNextJSThumbnail from 'public/post-images/migrate-to-nextjs-thumbnail.jpg'

const IMAGE_LIST = {
  BeforeCodeSplit,
  AfterCodeSplit,
  PhaserBundleSize,
  CodeSplitSlackMessage,
  RouterCodeSplitThumbnail,
  MessageBetweenAppAndWebThumbnail,
  MigrateToNextJSThumbnail,
}

export const isInImageList = (str: string): str is keyof typeof IMAGE_LIST =>
  Object.keys(IMAGE_LIST).includes(str)

export default IMAGE_LIST
