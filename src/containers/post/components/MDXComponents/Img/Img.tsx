import Image from 'next/image'
import { HTMLProps, ImgHTMLAttributes, memo } from 'react'
import IMAGE_LIST, { isInImageList } from 'src/constants/imageList'
import { twMerge } from 'tailwind-merge'

const Img = (
  props: Omit<
    HTMLProps<HTMLImageElement>,
    'ref' | 'as' | 'onError' | 'width' | 'height'
  >,
) => {
  const { src, crossOrigin, className, title, ...rest } = props

  if (!src) {
    return <div>{src} 이미지는 사용할 수 없습니다.</div>
  }

  return (
    <>
      <Image
        data-zoomable
        {...rest}
        crossOrigin={
          crossOrigin as ImgHTMLAttributes<HTMLImageElement>['crossOrigin']
        }
        placeholder="blur"
        src={isInImageList(src) ? IMAGE_LIST[src] : src}
        alt={title ?? src}
        title={title}
        className={twMerge(
          `mx-auto mt-8 rounded-2xl`,
          title ? 'mb-2' : 'mb-8',
          className,
        )}
      />
      {title && (
        <span className="mx-auto mb-8 inline-block w-full text-center text-zinc-400">
          {title}
        </span>
      )}
    </>
  )
}

export default memo(Img) as typeof Img
