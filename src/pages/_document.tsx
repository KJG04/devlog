import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  prismjsRef = React.createRef<HTMLLinkElement>();
  pretendardRef = React.createRef<HTMLLinkElement>();

  render() {
    return (
      <Html lang="ko-KR">
        <Head>
          {CssBaseline.flush()}
          <meta
            name="google-site-verification"
            content="_t993ryqkfkZtQ2TCWO8l2P2oXHwFfba2hMwaCQVP5s"
          />
        </Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          crossOrigin="anonymous"
          media="print"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          crossOrigin="anonymous"
          media="print"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
