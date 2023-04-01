import { RefObject, useCallback } from 'react';

export const useCopy = () => {
  const copy = useCallback(async (text: string) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {}
      return;
    }

    if (!document.queryCommandSupported('copy')) {
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
  }, []);

  return copy;
};

export const useCopyButton = (
  preRef: RefObject<HTMLPreElement>,
  copy: (text: string) => void
) => {
  const onCopyPress = useCallback(() => {
    if (!preRef.current) {
      return;
    }

    const text = preRef.current.innerText;
    copy(text);
  }, [copy, preRef]);

  return onCopyPress;
};
