import { atom } from 'recoil';

export const navigationBarVisibleAtom = atom<boolean>({
  default: true,
  key: 'navigationBarVisible',
});
