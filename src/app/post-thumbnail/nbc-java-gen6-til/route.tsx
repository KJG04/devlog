import { NextRequest, NextResponse } from 'next/server'
import { DayEnum } from '#utils/day'
import { createNbcTilThumbnail } from '#utils/image'

export async function GET(request: NextRequest) {
  const week = request.nextUrl.searchParams.get('week')
  const day = request.nextUrl.searchParams.get('day')
  const title = request.nextUrl.searchParams.get('title')
  const _showBigTitle = request.nextUrl.searchParams.get('showBigTitle')
  const showBigTitle = _showBigTitle === 'false' ? false : true

  if (!week || !day || !Object.keys(DayEnum).includes(day)) {
    return NextResponse.json('Bad Request', { status: 400 })
  }

  const pngBuffer = Buffer.from(
    await createNbcTilThumbnail(week, day, title ?? undefined, showBigTitle),
    'base64',
  )
  const headers = new Headers()
  headers.set('content-type', 'image/png')

  return new NextResponse(pngBuffer, { status: 200, statusText: 'OK', headers })
}
