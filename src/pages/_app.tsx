import '@/styles/global.scss';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>버틀스토리 공감</title>
      </Head>
      <Script
        strategy='beforeInteractive'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        onReady={() => {
          var brewery = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.492202, 126.843095),
            zoom: 16,
            zoomControl: true,
          });

          new naver.maps.Marker({
            position: new naver.maps.LatLng(37.492202, 126.843095),
            map: brewery,
          });
        }}
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
