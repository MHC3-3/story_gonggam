import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='오류동 버들스토리공감 많이 찾아와 주세요' />
        <link rel='icon' href='/favicon.ico' />
        {/* <script
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js'
          integrity='sha384-PFHeU/4gvSH8kpvhrigAPfZGBDPs372JceJq3jAXce11bVA6rMvGWzvP4fMQuBGL'
          crossOrigin='anonymous'
        ></script> */}
        {/* <script src='https://developers.kakao.com/sdk/js/kakao.js'></script> */}
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
