import { useTheme } from '@nextui-org/react';
import { FC } from 'react';

const Favicon: FC = () => {
  const { isDark } = useTheme();

  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/${isDark ? 'dark' : 'light'}-favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/${isDark ? 'dark' : 'light'}-favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/${isDark ? 'dark' : 'light'}-favicon/favicon-16x16.png`}
      />
      <link
        rel="icon"
        type="image/x-icon"
        href={`/${isDark ? 'dark' : 'light'}-favicon/favicon.ico`}
      />
      <link
        rel="/manifest"
        href={`/${isDark ? 'dark' : 'light'}-favicon/site.webmanifest`}
      />
    </>
  );
};

export default Favicon;
