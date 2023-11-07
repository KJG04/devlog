import { atom } from 'recoil';
import { v1 } from 'uuid';

export const navigationBarVisibleAtom = atom<boolean>({
  default: true,
  key: `navigationBarVisible/${v1()}`,
});
