"use client";
import {
  GoogleMap,
  LoadScriptNext,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { getCourtInfo } from "@/_lib/supabaseFunc";
import { distanceCalc } from "@/_lib/distanceCalc";

const containerStyle = {
  width: "80%",
  height: "75vh",
};

const zoomScale = 15;

let distance: number;

const ViewMap = (props: MapId) => {
  // バスケットコートの名前・住所・使用状況を管理
  const [mapName, setMapName] = useState<string>("");
  const [mapAddress, setMapAddress] = useState<string>("");
  const [isUsing, setIsUsing] = useState<boolean>();

  // 現在地の緯度経度を管理
  const [userPos, setUserPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  // バスケットコートの緯度経度を管理
  const [courtPos, setCourtPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  // ２地点間の線を引くためのPath
  const polylinePath = [
    { lat: userPos.lat, lng: userPos.lng },
    { lat: courtPos.lat, lng: courtPos.lng },
  ];

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

    // コートの名前・住所・緯度経度・使用状況を取得
    const getCourtInfoDetail = async () => {
      const data = await getCourtInfo(props.map_id);
      if (data) {
        setMapName(data[0].map_name);
        setMapAddress(data[0].map_address);
        setCourtPos({ lat: data[0].latitude, lng: data[0].longitude });
        setIsUsing(data[0].isUsing);
      }
    };

    // 処理呼び出し
    getUserLatLng();
    getCourtInfoDetail();
    distance = distanceCalc(
      userPos.lat,
      userPos.lng,
      courtPos.lat,
      courtPos.lng
    );
  }, [props.map_id, courtPos.lat, courtPos.lng, userPos.lat, userPos.lng]);

  return (
    <div className="flex flex-col h-screen">
      <div>
        {mapName}
        <br />
        {mapAddress}
        <br />
        {isUsing ? "使用中" : "未使用"}
        <br />
      </div>
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
          <PolylineF path={polylinePath} />
        </GoogleMap>
      </LoadScriptNext>
      <div>2点間の距離:{distance}km</div>
    </div>
  );
};

export default ViewMap;
