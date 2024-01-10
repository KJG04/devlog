import Screenshot20221018 from 'public/post-images/screenshot-2022-10-18.webp'
import BeforeCodeSplit from 'public/post-images/before-code-split.png'
import AfterCodeSplit from 'public/post-images/after-code-split.png'
import PhaserBundleSize from 'public/post-images/phaser-bundle-size.png'
import CodeSplitSlackMessage from 'public/post-images/code-split-slack-message.png'
import RouterCodeSplitThumbnail from 'public/post-images/router-code-split-thumbnail.jpg'
import MessageBetweenAppAndWebThumbnail from 'public/post-images/message-between-app-and-web-thumbnail.jpg'
import Thumbnail20221017 from 'public/post-images/thumbnail-2022-10-17.webp'
import Thumbnail20230401 from 'public/post-images/thumbnail-2023-04-01.webp'
import Thumbnail20230402 from 'public/post-images/thumbnail-2023-04-02.webp'

const IMAGE_LIST = {
  Screenshot20221018,
  Thumbnail20221017,
  Thumbnail20230401,
  Thumbnail20230402,
  BeforeCodeSplit,
  AfterCodeSplit,
  PhaserBundleSize,
  CodeSplitSlackMessage,
  RouterCodeSplitThumbnail,
  MessageBetweenAppAndWebThumbnail,
}

export const isInImageList = (str: string): str is keyof typeof IMAGE_LIST =>
  Object.keys(IMAGE_LIST).includes(str)

export default IMAGE_LIST
