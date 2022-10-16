/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import { NextUITheme } from '@nextui-org/react';

declare module '@emotion/react' {
  export interface Theme
    extends Omit<
      NextUITheme,
      keyof (string & {
        className: string;
        selector: string;
      })
    > {}
}
