import { HTMLProps, memo, useRef } from 'react';
import styled from '@emotion/styled';
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
      <PreContainer>
        <Header>
          <FilePath>{path?.join('  ') ?? className?.split('-')[1]}</FilePath>
          <CopyButton preRef={preRef} />
        </Header>
        <pre
          {...rest}
          ref={preRef}
          className={`${className ?? ''} ${
            showLineNumbers ? 'show-line-numbers' : ''
          }`}
        >
          {children}
        </pre>
      </PreContainer>
    </highlightContext.Provider>
  );
};

export default memo(Pre) as typeof Pre;

const PreContainer = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  background-color: var(--code-background);
  border-radius: ${({ theme }) => theme.radii.md.value};
  contain: paint;
  margin: ${({ theme }) => theme.space.md.value} 0;

  pre {
    margin-top: 0px;
  }
`;

const Header = styled.div`
  position: sticky;
  background-color: var(--code-background);
  top: 69px;
  z-index: 3;
  color: #787f85;
  display: flex;
  border-bottom: 1px solid rgba(156, 163, 175, 0.2);

  &::before {
    content: '';
    background-color: var(--code-background);
    position: absolute;
    left: 0px;
    bottom: 100%;
    width: 100%;
    height: 1000px;
  }
`;

export const FilePath = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.space.md.value};
`;
