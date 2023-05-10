import { useTheme } from '@emotion/react';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export const useCopy = () => {
  const copy = useCallback(async (text: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return;
    }

    if (!document.queryCommandSupported('copy')) {
      throw new Error();
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
  const theme = useTheme();
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState(
    'var(--code-background)'
  );
  const [buttonColor, setButtonColor] = useState('#787f85');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onSuccess = useCallback(() => {
    setButtonBackgroundColor(theme.colors.green600.value);
    setButtonColor(theme.colors.white.value);
  }, [theme.colors.green600.value, theme.colors.white.value]);

  const onError = useCallback(() => {
    setButtonBackgroundColor(theme.colors.error.value);
    setButtonColor(theme.colors.white.value);
  }, [theme.colors.error.value, theme.colors.white.value]);

  const reset = useCallback(() => {
    setButtonBackgroundColor('var(--code-background)');
    setButtonColor('#787f85');
  }, []);

  const resetWait3Seconds = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      reset();
      timeoutRef.current = null;
    }, 3000);
  }, [reset]);

  const onCopyPress = useCallback(async () => {
    if (!preRef.current) {
      return;
    }

    const text = preRef.current.innerText;
    try {
      await copy(text);
      onSuccess();
      resetWait3Seconds();
    } catch (error) {
      onError();
      resetWait3Seconds();
    }
  }, [copy, onError, onSuccess, preRef, resetWait3Seconds]);

  useEffect(() => {
    reset();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [reset]);

  return { onCopyPress, buttonBackgroundColor, buttonColor };
};
