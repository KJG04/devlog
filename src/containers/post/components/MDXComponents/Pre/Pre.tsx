import { HTMLProps, memo, useRef } from 'react';
import CopyButton from '#containers/post/components/MDXComponents/Pre/CopyButton';
import highlightContext from '#context/highlight';
import { useHighlightValue, usePathValue } from './hooks';

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

  return (
    <highlightContext.Provider value={highlight}>
      <div
        className="relative top-0 left-0 rounded-md my-unit-md mx-0"
        style={{ contain: 'paint' }}
      >
        <div className="sticky top-[69px] z-30 text-zinc-500 flex border-b-1 border-solid border-zinc-400 bg-codeBack before:content-[''] before:absolute before:left-0 before:bottom-full before:w-full before:h-[1000px]">
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
          } mt-0`}
        >
          {children}
        </pre>
      </div>
    </highlightContext.Provider>
  );
};

export default memo(Pre) as typeof Pre;
