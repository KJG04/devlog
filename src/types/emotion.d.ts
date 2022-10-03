import '@emotion/react';
import { NextUITheme } from '@nextui-org/react';

declare module '@emotion/react' {
  // eslint-disable-next-line #typescript-eslint/no-empty-interface
  export interface Theme
    extends Omit<
      NextUITheme,
      keyof (string & {
        className: string;
        selector: string;
      })
    > {}
}
