"use client";
import {
  GoogleMap,
  LoadScript,
  LoadScriptNext,
  MarkerF,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { getCourtLatLng } from "@/_lib/supabaseFunc";
import { distanceCalc } from "@/_lib/distanceCalc";

const containerStyle = {
  width: "80%",
  height: "75vh",
};

const zoomScale = 15;

let distance: number;

const ViewMap = () => {
  // 現在地の緯度経度を管理
  const [userPos, setUserPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  // 目的地の緯度経度を管理
  const [courtPos, setCourtPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    // ユーザの現在の緯度経度を取得
    const getUserLatLng = () => {
      navigator.geolocation.getCurrentPosition(
        // 取得成功処理
        (position: GeolocationPosition) => {
          const curLat: number = position.coords.latitude;
          const curLng: number = position.coords.longitude;
          setUserPos({ lat: curLat, lng: curLng });
        },
        // 取得失敗処理
        (error: any) => {
          alert("位置情報を取得できませんでした。");
        }
      );
    };

    // コートの緯度経度を取得
    const getPlaceLatLng = async () => {
      const data = await getCourtLatLng("370c1246-753a-4178-bc56-c44e923d8a00");
      if (data) {
        setCourtPos({ lat: data[0].latitude, lng: data[0].longitude });
      }
      // setCourtPos({ lat: 33.589728, lng: 130.420727 });
    };

    // 処理呼び出し
    getUserLatLng();
    getPlaceLatLng();
    distance = distanceCalc(
      userPos.lat,
      userPos.lng,
      courtPos.lat,
      courtPos.lng
    );
  }, [courtPos.lat, courtPos.lng, userPos.lat, userPos.lng]);

  return (
    <div>
      <LoadScriptNext
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userPos}
          zoom={zoomScale}
        >
          <MarkerF visible={true} position={userPos} />
          <MarkerF visible={true} position={courtPos} />
        </GoogleMap>
      </LoadScriptNext>
      <div>2点間の距離:{distance}km</div>
    </div>
  );
};

export default ViewMap;