import { FC, memo, useEffect, useState, ReactElement } from 'react';

interface PropsType {
  children: ReactElement;
  fallback?: ReactElement;
}

const MountOnly: FC<PropsType> = (props) => {
  const { children, fallback = null } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : fallback;
};
export default memo(MountOnly);
