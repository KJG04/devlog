import { HTMLProps, memo, useRef } from 'react';
import CopyButton from '#containers/post/components/MDXComponents/Pre/CopyButton';
import highlightContext from '#context/highlight';
import { useHighlightValue, usePathValue } from './hooks';
import { useRecoilValue } from 'recoil';
import { navigationBarVisibleAtom } from '#atoms/navigationBarVisible';

interface PropsType {
  showLineNumbers?: string;
  line?: string;
  path?: string;
}

type MergedPropsType = HTMLProps<HTMLPreElement> & PropsType;

const Pre = (props: HTMLProps<HTMLPreElement>) => {
  const {
    children,
    className,
    showLineNumbers: _showLineNumbers,
    line,
    path: _path,
    ...rest
  } = props as MergedPropsType;
  const showLineNumbers = _showLineNumbers === 'true';
  const preRef = useRef<HTMLPreElement>(null);
  const highlight = useHighlightValue(line);
  const path = usePathValue(_path);
  const visible = useRecoilValue(navigationBarVisibleAtom);

  return (
    <highlightContext.Provider value={highlight}>
      <div
        className="relative top-0 left-0 my-unit-lg mx-0 rounded-large w-full"
        style={{ contain: 'paint' }}
      >
        <div
          className={`sticky ${
            visible ? 'top-[64px]' : 'top-0'
          } z-30 text-zinc-400 flex border-b-1 border-solid border-[#9ca3af33] bg-zinc-700 dark:bg-zinc-800 before:content-[''] before:absolute before:left-0 before:bottom-full before:w-full before:h-[1000px] before:bg-zinc-700 dark:before:bg-zinc-800 transition-[top] duration-400`}
        >
          <div className="flex-1 flex items-center py-0 px-unit-md">
            {path?.join('  ') ?? className?.split('-')[1]}
          </div>
          <CopyButton preRef={preRef} />
        </div>
        <pre
          {...rest}
          ref={preRef}
          className={`${className ?? ''} ${
            showLineNumbers ? 'show-line-numbers' : ''
          } m-0`}
        >
          {children}
        </pre>
      </div>
    </highlightContext.Provider>
  );
};

export default memo(Pre) as typeof Pre;
