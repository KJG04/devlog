import BeforeCodeSplit from 'public/post-images/before-code-split.jpg'
import AfterCodeSplit from 'public/post-images/after-code-split.jpg'
import PhaserBundleSize from 'public/post-images/phaser-bundle-size.jpg'
import CodeSplitSlackMessage from 'public/post-images/code-split-slack-message.jpg'
import RouteBasedCodeSplitThumbnail from 'public/post-images/route-based-code-split-thumbnail.jpg'
import SendingMessagesToAndFromTheWebAndReactNativeThumbnail from 'public/post-images/sending-messages-to-and-from-the-web-and-react-native-thumbnail.jpg'
import GradualMigrateToNextjsThumbnail from 'public/post-images/gradual-migrate-to-nextjs-thumbnail.jpg'
import GraphqlWithReactQueryThumbnail from 'public/post-images/graphql-with-react-query-thumbnail.jpg'
import PrefetchQueryWithReactQueryThumbnail from 'public/post-images/prefetch-query-with-react-query-thumbnail.jpg'
import CannotLoadStaticAsset from 'public/post-images/cannot-load-static-asset.jpg'
import EntityLifecycle from 'public/post-images/entity-lifecycle.jpg'

const IMAGE_LIST = {
  BeforeCodeSplit,
  AfterCodeSplit,
  PhaserBundleSize,
  CodeSplitSlackMessage,
  RouteBasedCodeSplitThumbnail,
  SendingMessagesToAndFromTheWebAndReactNativeThumbnail,
  GradualMigrateToNextjsThumbnail,
  GraphqlWithReactQueryThumbnail,
  PrefetchQueryWithReactQueryThumbnail,
  CannotLoadStaticAsset,
  EntityLifecycle,
} as const

export const isInImageList = (str: string): str is keyof typeof IMAGE_LIST =>
  Object.keys(IMAGE_LIST).includes(str)

export default IMAGE_LIST
