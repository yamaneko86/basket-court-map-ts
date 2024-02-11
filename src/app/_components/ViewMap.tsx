"use client";
import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  PolylineF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { getCourtInfo, switchIsUsing } from "@/_utils/supabase/supabaseFunc";
import { calcCenter, calcSwNe, distanceCalc } from "@/_utils/calcFunc";
import { useParams, useRouter } from "next/navigation";
import iconPath from "../../../public/images/CurrentLocation.png";

const containerStyle = {
  width: "80%",
  height: "70vh",
};

let distance: number;

const ViewMap = () => {
  // バスケットコートの都道府県コード・名前・住所・使用状況を管理
  const [prefCode, setPrefCode] = useState<number>();
  const [mapName, setMapName] = useState<string>("");
  const [mapAddress, setMapAddress] = useState<string>("");
  const [isUsing, setIsUsing] = useState<boolean>(false);

  // 現在地の緯度経度を管理
  let [userPos, setUserPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  // バスケットコートの緯度経度を管理
  let [courtPos, setCourtPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  // マップ上の吹き出しの緯度経度を管理
  const [infoPos, setInfoPos] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  const [map, setMap] = useState<google.maps.Map>();

  const onLoad = useCallback((map: google.maps.Map) => setMap(map), []);

  // map_idをURLから取得("map_id"は動的ルートパス名)
  const map_id_path = useParams().map_id.toString();

  // ２地点間の線を引くためのPath
  const polylinePath = [
    { lat: userPos.lat, lng: userPos.lng },
    { lat: courtPos.lat, lng: courtPos.lng },
  ];

  const handleSwitch = async () => {
    await switchIsUsing(map_id_path, isUsing);
    setIsUsing(!isUsing);
  };

  // 都道府県コードによって戻る一覧画面を切り替える
  const router = useRouter();
  const switchHref = () => {
    if (prefCode) {
      if (prefCode == 1) {
        router.push("/hokkaido");
      } else if (prefCode >= 2 && prefCode <= 7) {
        router.push("/tohoku");
      } else if (prefCode >= 8 && prefCode <= 14) {
        router.push("/kanto");
      } else if (prefCode >= 15 && prefCode <= 23) {
        router.push("/chubu");
      } else if (prefCode >= 24 && prefCode <= 30) {
        router.push("/kinki");
      } else if (prefCode >= 31 && prefCode <= 35) {
        router.push("/chugoku");
      } else if (prefCode >= 36 && prefCode <= 39) {
        router.push("/shikoku");
      } else if (prefCode >= 40 && prefCode <= 47) {
        router.push("/kyushu");
      } else {
        router.push("/");
      }
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  // const onLoad = useCallback(
  //   function callback(map: google.maps.Map) {
  // const bounds = calcSwNe(
  //   userPos.lat,
  //   userPos.lng,
  //   courtPos.lat,
  //   courtPos.lng
  // );
  //     const bounds = new google.maps.LatLngBounds(userPos);
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   },
  //   [courtPos.lat, courtPos.lng, userPos.lat, userPos.lng]
  // );

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

    // コートの都道府県コード・名前・住所・緯度経度・使用状況を取得
    const getCourtInfoDetail = async () => {
      const data = await getCourtInfo(map_id_path);
      if (data) {
        setPrefCode(data[0].prefecture_code);
        setMapName(data[0].map_name);
        setMapAddress(data[0].map_address);
        setCourtPos({ lat: data[0].latitude, lng: data[0].longitude });
        setInfoPos({ lat: data[0].latitude + 0.001, lng: data[0].longitude });
        setIsUsing(data[0].isUsing);
      }
    };

    // 処理呼び出し
    getCourtInfoDetail();
    getUserLatLng();
    distance = distanceCalc(
      userPos.lat,
      userPos.lng,
      courtPos.lat,
      courtPos.lng
    );

    // マーカーが全てマップ内に表示されるようにする
    if (map) {
      const center = calcCenter(
        userPos.lat,
        userPos.lng,
        courtPos.lat,
        courtPos.lng
      );
      const bounds = calcSwNe(
        userPos.lat,
        userPos.lng,
        courtPos.lat,
        courtPos.lng
      );

      map.setCenter(center);
      map.fitBounds(bounds);
    }
  }, [
    map_id_path,
    isUsing,
    courtPos.lat,
    courtPos.lng,
    userPos.lat,
    userPos.lng,
    map,
  ]);

  // TODO 1ユーザーにつき1回の使用中・未使用の切り替え機能を作成

  return (
    <>
      {isLoaded ? (
        <div>
          <div>
            {mapName}
            <br />
            {mapAddress}
            <br />
            <button onClick={() => handleSwitch()}>
              {isUsing ? "使用中" : "未使用"}
            </button>
            <br />
          </div>

          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={10}
            onLoad={onLoad}
          >
            <MarkerF visible={true} position={userPos} icon={iconPath.src} />
            <MarkerF visible={true} position={courtPos} />
            <InfoWindow position={infoPos}>
              <div>
                <h1>The Court is here!</h1>
              </div>
            </InfoWindow>
            <PolylineF
              path={polylinePath}
              options={{ strokeColor: "#ff0000" }}
            />
          </GoogleMap>
          <div>2点間の距離:{distance}km</div>
          <button type="button" onClick={() => switchHref()}>
            一覧に戻る
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center ">
          <div className="text-4xl font-bold text-gray-800 animate-pulse">
            Loading...
          </div>
        </div>
      )}
    </>
  );
};

export default ViewMap;
