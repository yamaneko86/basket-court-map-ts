import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect } from "react";

const containerStyle = {
  width: "80%",
  height: "75vh",
};

let center = {
  // 初期座標：ユーザの位置情報
  lat: 34.7293466708865,
  lng: 135.49939605607292,
};

const zoom = 13;

const ViewMap = () => {
  useEffect(() => {
    // ユーザの現在の緯度経度を取得
    const getUserLatLon = () => {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

      // 取得成功処理
      function successCallback(position: any) {
        const lat: number = position.coords.latitude;
        const lon: number = position.coords.longitude;
        center.lat = lat;
        center.lng = lon;
      }

      // 取得失敗処理
      function errorCallback(error: any) {
        alert("位置情報を取得できませんでした。");
      }
    };
    getUserLatLon();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} />
    </LoadScript>
  );
};
