import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='오류동 버들스토리공감 많이 찾아와 주세요' />
        <link rel='icon' href='/favicon.ico' />
        {/* <script defer src='https://developers.kakao.com/sdk/js/kakao.min.js'></script> */}
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
