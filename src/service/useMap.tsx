export const useMap = () => {
  // Brewery
  var brewery = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.71344096516783, 126.8666797982575),
    zoom: 15,
    zoomControl: true,
  });

  new naver.maps.Marker({
    position: new naver.maps.LatLng(37.71344096516783, 126.8666797982575),
    map: brewery,
  });
};
