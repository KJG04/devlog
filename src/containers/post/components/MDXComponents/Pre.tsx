import { HTMLProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { Button, Tooltip } from '@nextui-org/react';

const Pre = (props: HTMLProps<HTMLPreElement>) => {
  const { children, ...rest } = props;

  return (
    <div style={{ position: 'relative' }}>
      <Button
        auto
        css={{
          position: 'absolute',
          height: 40,
          width: 40,
          padding: 0,
          color: '$gray700',
          backgroundColor: '$gray400',
          top: '$4',
          right: '$4',
        }}
      >
        <Tooltip content={'복사하기'} trigger="hover">
          <FontAwesomeIcon icon={faClone} size="lg" />
        </Tooltip>
      </Button>
      <pre {...rest}>{children}</pre>
    </div>
  );
};

export default  Pre;
