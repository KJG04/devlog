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
        className="relative left-0 top-0 mx-0 my-unit-lg w-full rounded-large"
        style={{ contain: 'paint' }}
      >
        <div
          className={`sticky ${
            visible ? 'top-[64px]' : 'top-0'
          } z-30 flex border-b-1 border-solid border-[#9ca3af33]  text-zinc-400 transition-[top] duration-400 before:absolute before:bottom-full before:left-0 before:h-[1000px] before:w-full before:content-[''] bg-zinc-800 before:bg-zinc-800`}
        >
          <div className="flex flex-1 items-center px-unit-md py-0">
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
