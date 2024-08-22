'use server'

import { getPlaiceholder, GetPlaiceholderOptions } from 'plaiceholder'

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
  const bf = Buffer.from(b64, 'base64')
  return getPlaiceholder(bf, {
    size: 20,
    ...options,
  })
}
