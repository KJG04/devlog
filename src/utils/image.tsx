/* eslint-disable @next/next/no-img-element */
'use server'

import { getPlaiceholder, GetPlaiceholderOptions } from 'plaiceholder'
import satori, { SatoriOptions } from 'satori'
import fs from 'fs/promises'
import path from 'path'
import { DayEnum } from '#utils/day'
import sharp from 'sharp'

export async function getBlurDataURL(
  src: string,
  options?: GetPlaiceholderOptions,
) {
  const fullUrlRegex = /^https?:\/\//i
  let bf: Buffer

  if (fullUrlRegex.test(src)) {
    const b64 = await fetch(src, {
      cache: 'force-cache',
    }).then(async (res) =>
      Buffer.from(await res.arrayBuffer()).toString('base64'),
    )

    bf = Buffer.from(b64, 'base64')
  } else if (src.startsWith('/post-thumbnail/nbc-java-gen6-til/')) {
    const url = new URL(src, process.env.URL)
    const week = url.searchParams.get('week') ?? undefined
    const day = url.searchParams.get('day') ?? undefined
    const title = url.searchParams.get('title') ?? undefined
    const _showBigTitle = url.searchParams.get('showBigTitle')
    const showBigTitle = _showBigTitle === 'false' ? false : true

    bf = await createNbcJavaGen6TilThumbnail(week, day, title, showBigTitle)
  } else {
    return
  }

  return getPlaiceholder(bf, {
    size: 20,
    ...options,
  })
}

const dayColorMap: Record<DayEnum, string> = {
  [DayEnum.MONDAY]: '#006FEE',
  [DayEnum.TUESDAY]: '#9353D3',
  [DayEnum.WEDNESDAY]: '#17C964',
  [DayEnum.THURSDAY]: '#F31260',
  [DayEnum.FRIDAY]: '#F5A524',
}

const dayTextMap: Record<DayEnum, string> = {
  [DayEnum.MONDAY]: '월요일',
  [DayEnum.TUESDAY]: '화요일',
  [DayEnum.WEDNESDAY]: '수요일',
  [DayEnum.THURSDAY]: '목요일',
  [DayEnum.FRIDAY]: '금요일',
}

async function readFile(p: string) {
  console.log({
    'process.cwd()': process.cwd(),
    p,
    'path.join(process.cwd(), p)': path.join(process.cwd(), p),
    'await fs.readdir(process.cwd())': await fs.readdir(process.cwd()),
    'await fs.readdir(process.cwd() + /src)': await fs.readdir(
      process.cwd() + '/src',
    ),
  })

  return fs.readFile(path.join(process.cwd(), p))
}

export async function createNbcJavaGen6TilThumbnail(
  week?: string,
  day?: string,
  title?: string,
  showBigTitle: boolean = true,
) {
  const [
    pretendardExtraBoldSubset,
    pretendardMediumSubset,
    pretendardRegularSubset,
    spartaLogo,
  ] = await Promise.all([
    readFile('public/fonts/Pretendard-ExtraBold-Subset.otf'),
    readFile('public/fonts/Pretendard-Medium-Subset.otf'),
    readFile('public/fonts/Pretendard-Regular-Subset.otf'),
    readFile('public/images/sparta-logo.png'),
  ])

  const spartaLogoBase64 = Buffer.from(spartaLogo).toString('base64')

  const options: SatoriOptions = {
    width: 1280,
    height: 640,
    debug: false,
    fonts: [
      {
        data: pretendardExtraBoldSubset,
        name: 'Pretendard-ExtraBold',
        weight: 800,
      },
      {
        data: pretendardMediumSubset,
        name: 'Pretendard-Medium',
        weight: 500,
      },
      {
        data: pretendardRegularSubset,
        name: 'Pretendard-Regular',
        weight: 400,
      },
    ],
  }

  const svg = await satori(
    <div
      style={{
        width: 1280,
        height: 640,
        background: '#202020',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <img
        alt="스파르타 로고"
        src={`data:image/png;base64,${spartaLogoBase64}`}
        width={250}
        height={134}
      />
      {showBigTitle && (
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            fontFamily: 'Pretendard-ExtraBold',
            color: '#FAFAFA',
            marginTop: 6,
          }}
        >
          Today I Learned
        </div>
      )}
      {title && (
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            fontFamily: 'Pretendard-Medium',
            color: '#FAFAFA',
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          whiteSpace: 'pre',
          color: '#D4D4D8',
          fontSize: 32,
          fontWeight: 400,
          fontFamily: 'Pretendard-Regular',
          display: 'flex',
        }}
      >
        {week && <>내일배움캠프 Spring {week}주차 </>}
        {day && (
          <span style={{ color: dayColorMap[day as keyof typeof DayEnum] }}>
            {dayTextMap[day as keyof typeof DayEnum]}
          </span>
        )}
      </div>
    </div>,
    options,
  )

  return await sharp(Buffer.from(svg)).png().toBuffer()
}
