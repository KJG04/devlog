'use server'

import CACHE_KEY from '#constants/cacheKey'
import { unstable_cache } from 'next/cache'
import { getPlaiceholder, GetPlaiceholderOptions } from 'plaiceholder'

const _getPlaiceholder = unstable_cache(
  async (_base64: string, options?: GetPlaiceholderOptions) => {
    const bf = Buffer.from(_base64, 'base64')
    return getPlaiceholder(bf, {
      size: 20,
      ...options,
    })
  },
  CACHE_KEY.GET_PLAICEHOLDER,
)

export async function getBlurDataURL(
  src: string,
  options?: GetPlaiceholderOptions,
) {
  const pat = /^https?:\/\//i

  const b64 = await fetch(pat.test(src) ? src : new URL(src, process.env.URL), {
    cache: 'force-cache',
  }).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString('base64'),
  )
  return _getPlaiceholder(b64, options)
}
