import Script from 'next/script';
import React, { useEffect, useRef } from 'react';
import { useMap } from 'service/useMap';
import styles from './map.module.scss';

function Map() {
  return (
    <>
      <Script
        strategy='beforeInteractive'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        onReady={() => {
          var brewery = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.492202, 126.843095),
            zoom: 18,
            zoomControl: true,
          });

          var breweryMarker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.492202, 126.843095),
            map: brewery,
          });
        }}
      ></Script>
      <div id='map' className={styles.map}></div>
    </>
  );
}

export default Map;
