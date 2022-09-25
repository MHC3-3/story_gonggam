import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

function Document() {
  return (
    <Html>
      <Head>
        <title>버틀스토리 공감</title>
        <meta name='description' content='오류동 버들스토리공감 많이 찾아와 주세요' />
        <link rel='icon' href='/favicon.ico' />
        {/* <script
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        ></script> */}
      </Head>

      <body>
        <Main />
        <div id='modal'></div>
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
