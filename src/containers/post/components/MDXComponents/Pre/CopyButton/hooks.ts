import { TooltipColors } from '@nextui-org/react';
import { RefObject, useCallback, useState } from 'react';

export const useCopy = (onSuccess: () => void, onError: () => void) => {
  const copy = useCallback(
    async (text: string) => {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(text);
          onSuccess();
        } catch (error) {
          onError();
        }

        return;
      }

      if (!document.queryCommandSupported('copy')) {
        onError();
        return;
      }

      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.visibility = 'hidden';
      textarea.style.position = 'fixed';

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      document.execCommand('copy');
      document.body.removeChild(textarea);

      onSuccess();
    },
    [onError, onSuccess]
  );

  return copy;
};

export const useCopyTooltip = () => {
  const [tooltipColor, setTooltipColor] = useState<TooltipColors>('default');
  const [tooltipContent, setTooltipContent] = useState<string>('복사하기');

  const onCopyError = useCallback(() => {
    setTooltipColor('error');
    setTooltipContent('복사실패');
    return;
  }, []);

  const onCopySuccess = useCallback(() => {
    setTooltipColor('success');
    setTooltipContent('복사성공');
    return;
  }, []);

  const onVisibleChange = useCallback((visible: boolean) => {
    if (visible) {
      setTooltipColor('default');
      setTooltipContent('복사하기');
    }
  }, []);

  return {
    tooltipColor,
    tooltipContent,
    onCopyError,
    onCopySuccess,
    onVisibleChange,
  };
};

export const useCopyButton = (
  preRef: RefObject<HTMLPreElement>,
  copy: (text: string) => void
) => {
  const onCopyPress = () => {
    if (!preRef.current) {
      return;
    }

    const text = preRef.current.innerText;
    copy(text);
  };

  return onCopyPress;
};
