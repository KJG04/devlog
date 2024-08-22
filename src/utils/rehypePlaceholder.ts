/** @see https://zenn.dev/reohakase/articles/3443b7ffd8ffdb */

import { isInImageList } from '#constants/imageList'
import { getBlurDataURL } from '#utils/image'
import type { Root, Element } from 'hast'
import { GetPlaiceholderOptions } from 'plaiceholder'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

type ImageElement = {
  tagName: 'img'
  url: string
  properties: {
    src: string
    width: number
    height: number
    blurDataURL: string
  }
} & Element

const isImageElement = (node: Element): node is ImageElement =>
  node.tagName === 'img'

/**
 * Optimizes images in the given HTML tree by adding the placeholder image base64 URL, width, and height.
 * These properties are generated in order to be passed to `next/image` component.
 * This plugin uses the `getImageBuffer` and `getPlaiceholder` functions to retrieve the image buffer and generate a blur data URL.
 * The optimized image properties (src, width, height, aspectRatio, blurDataURL) are added to the image node's data.
 * @param tree The HTML tree to optimize.
 * @see https://www.haxibami.net/blog/posts/blog-renewal#%E7%94%BB%E5%83%8F%E5%87%A6%E7%90%86
 */
export const rehypeImageOptimizer: Plugin<[GetPlaiceholderOptions?], Root> =
  (options) => async (tree) => {
    const promises: (() => Promise<void>)[] = []
    visit(tree, 'element', (node: ImageElement | Element) => {
      // Check if node has tagName and tagName is 'img', while tagName could be undefined.
      if (!isImageElement(node)) return
      // Now, we can safely assume that node is an image node.
      const { src } = node.properties
      console.log(src)
      // isInImageList이면 plaiceholder를 그만둔다
      if (isInImageList(src)) {
        return
      }
      promises.push(async () => {
        try {
          // Retrieve the image buffer and generate the blur data URL and size data.
          const { base64, metadata } = await getBlurDataURL(src, options)
          const { width, height } = metadata

          // Add the optimized image properties to the image node.
          node.properties = {
            ...node.properties,
            src,
            width,
            height,
            blurDataURL: base64,
          }
        } catch (e) {
          // If an error occurs, log it and throw it again, since contentlayer does not handle and output exceptions correctly.
          // eslint-disable-next-line no-console
          console.error('🖼️ rehypeImageOptimizer', e)
          throw e
        }
      })
    })
    await Promise.allSettled(promises.map((t) => t()))
  }
