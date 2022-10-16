import { FC } from 'react';

const Favicon: FC = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/dark-favicon/apple-touch-icon.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/dark-favicon/favicon-32x32.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/dark-favicon/favicon-16x16.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="/dark-favicon/favicon.ico"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="/manifest"
        href="/dark-favicon/site.webmanifest"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/light-favicon/apple-touch-icon.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/light-favicon/favicon-32x32.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/light-favicon/favicon-16x16.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="/light-favicon/favicon.ico"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="/manifest"
        href="/light-favicon/site.webmanifest"
        media="(prefers-color-scheme: light)"
      />
    </>
  );
};

export default Favicon;
