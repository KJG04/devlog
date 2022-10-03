import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { Button, Tooltip } from '@nextui-org/react';
import { useCopy, useCopyButton, useCopyTooltip } from './hooks';
import { FC, RefObject } from 'react';

interface PropsType {
  preRef: RefObject<HTMLPreElement>;
}

const CopyButton: FC<PropsType> = (props) => {
  const { preRef } = props;
  const {
    onCopyError,
    onCopySuccess,
    onVisibleChange,
    tooltipColor,
    tooltipContent,
  } = useCopyTooltip();
  const copy = useCopy(onCopySuccess, onCopyError);
  const onCopyPress = useCopyButton(preRef, copy);

  return (
    <Tooltip
      color={tooltipColor}
      content={tooltipContent}
      trigger="hover"
      onVisibleChange={onVisibleChange}
    >
      <Button
        css={{
          padding: 0,
          width: 40,
          height: 40,
          backgroundColor: '$gray500',
          color: '$gray800',
        }}
        auto
        onPress={onCopyPress}
      >
        <FontAwesomeIcon icon={faClone} size="lg" />
      </Button>
    </Tooltip>
  );
};

export default CopyButton;
