/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextRequest, NextResponse } from 'next/server'
import { ImageResponse } from 'next/og'
import { DayEnum } from '#utils/day'
import path from 'path'
import fs from 'fs/promises'

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

// export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const week = request.nextUrl.searchParams.get('week')
  const day = request.nextUrl.searchParams.get('day')
  const title = request.nextUrl.searchParams.get('title')
  const pretendardExtraBoldSubset = fs.readFile(
    path.join(process.cwd(), 'public/fonts/Pretendard-ExtraBold-Subset.otf'),
  )
  const pretendardMediumSubset = fs.readFile(
    path.join(process.cwd(), 'public/fonts/Pretendard-Medium-Subset.otf'),
  )
  const pretendardRegularSubset = fs.readFile(
    path.join(process.cwd(), 'public/fonts/Pretendard-Regular-Subset.otf'),
  )
  const spartaLogo = await fs.readFile(
    path.join(process.cwd(), 'public/images/sparta-logo.png'),
  )
  const spartaLogoBase64 = Buffer.from(spartaLogo).toString('base64')

  if (!week || !day || !title || !Object.keys(DayEnum).includes(day)) {
    return NextResponse.json('Bad Request', { status: 400 })
  }

  return new ImageResponse(
    (
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
          내일배움캠프 Spring {week}주차{' '}
          <span style={{ color: dayColorMap[day as keyof typeof DayEnum] }}>
            {dayTextMap[day as keyof typeof DayEnum]}
          </span>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 640,
      status: 200,
      fonts: [
        {
          data: await pretendardExtraBoldSubset,
          name: 'Pretendard-ExtraBold',
          weight: 800,
        },
        {
          data: await pretendardMediumSubset,
          name: 'Pretendard-Medium',
          weight: 500,
        },
        {
          data: await pretendardRegularSubset,
          name: 'Pretendard-Regular',
          weight: 400,
        },
      ],
    },
  )
}
