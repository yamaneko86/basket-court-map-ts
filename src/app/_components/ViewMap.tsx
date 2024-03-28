'use client';
import { calcCenter, calcSwNe, distanceCalc } from '@/_utils/calcFunc';
import { getCourtInfo, switchIsUsing } from '@/_utils/supabase/supabaseFunc';
import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import iconPath from '../../../public/images/CurrentLocation.png';

// 現在地と目的地の距離
let distance: number;

const ViewMap = () => {
  // バスケットコートの都道府県コード・名前・住所・使用状況を管理
  const [courtInfo, setCourtInfo] = useState({
    prefCode: 0,
    mapName: '',
    mapAddress: '',
  });
  const [isUsing, setIsUsing] = useState<boolean>(false);
  const [map, setMap] = useState<google.maps.Map>();

  // map_idをURLから取得("map_id"は動的ルートパス名)
  const map_id_path = useParams().map_id.toString();

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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });

  const onLoad = useCallback((map: google.maps.Map) => setMap(map), []);

  const handleSwitch = async () => {
    await switchIsUsing(map_id_path, isUsing);
    setIsUsing(!isUsing);
  };

  // 都道府県コードによって戻る一覧画面を切り替える
  const router = useRouter();
  const switchHref = () => {
    if (courtInfo.prefCode) {
      if (courtInfo.prefCode === 1) {
        router.push('/hokkaido');
      } else if (courtInfo.prefCode >= 2 && courtInfo.prefCode <= 7) {
        router.push('/tohoku');
      } else if (courtInfo.prefCode >= 8 && courtInfo.prefCode <= 14) {
        router.push('/kanto');
      } else if (courtInfo.prefCode >= 15 && courtInfo.prefCode <= 23) {
        router.push('/chubu');
      } else if (courtInfo.prefCode >= 24 && courtInfo.prefCode <= 30) {
        router.push('/kinki');
      } else if (courtInfo.prefCode >= 31 && courtInfo.prefCode <= 35) {
        router.push('/chugoku');
      } else if (courtInfo.prefCode >= 36 && courtInfo.prefCode <= 39) {
        router.push('/shikoku');
      } else if (courtInfo.prefCode >= 40 && courtInfo.prefCode <= 47) {
        router.push('/kyushu');
      } else {
        router.push('/');
      }
    }
  };

  // ユーザの現在の緯度経度を取得
  const getUserLatLng = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // 取得成功処理
        (position: GeolocationPosition) => {
          const curLat: number = position.coords.latitude;
          const curLng: number = position.coords.longitude;
          setUserPos({ lat: curLat, lng: curLng });
        },
        // 取得失敗処理
        (error: GeolocationPositionError) => {
          alert('位置情報を取得できませんでした。');
        },
      );
    }
  };

  // コートの都道府県コード・名前・住所・緯度経度・使用状況を取得
  const getCourtInfoDetail = async () => {
    const data = await getCourtInfo(map_id_path);
    if (data) {
      // setPrefCode(data[0].prefecture_code);
      // setMapName(data[0].map_name);
      // setMapAddress(data[0].map_address);
      setCourtInfo({
        prefCode: data[0].prefecture_code,
        mapName: data[0].map_name,
        mapAddress: data[0].map_address,
      });
      setCourtPos({ lat: data[0].latitude, lng: data[0].longitude });
      setIsUsing(data[0].isUsing);
    }
  };

  // 処理呼び出し
  getCourtInfoDetail();
  getUserLatLng();
  distance = distanceCalc(userPos.lat, userPos.lng, courtPos.lat, courtPos.lng);

  // マーカーが全てマップ内に表示されるようにする
  if (map) {
    // 以下、beta版？のため保留中
    // const userIcon = document.createElement("img");
    // userIcon.src = "../../../public/images/CurrentLocation.png";
    // const userMarker = new google.maps.marker.AdvancedMarkerElement({
    //   map: map,
    //   position: userPos,
    // content: userIcon,
    // });

    // const courtMarker = new google.maps.marker.AdvancedMarkerElement({
    //   map: map,
    //   position: courtPos,
    // });

    const center = calcCenter(
      userPos.lat,
      userPos.lng,
      courtPos.lat,
      courtPos.lng,
    );
    const bounds = calcSwNe(
      userPos.lat,
      userPos.lng,
      courtPos.lat,
      courtPos.lng,
    );

    map.setCenter(center);
    map.fitBounds(bounds);
  }

  // TODO 1ユーザーにつき1回の使用中・未使用の切り替え機能を作成

  return (
    <>
      {isLoaded ? (
        <>
          <div className="bg-orange-100 h-8 flex items-center">
            <Link href={'/'} className="text-md px-2 hover:text-red-500">
              トップ
            </Link>
            {'>'}
            <button
              type="button"
              className="text-md px-2 hover:text-red-500"
              onClick={() => switchHref()}
            >
              コート一覧
            </button>
          </div>
          <div className="overflow-auto">
            <div className="text-xl font-bold border-l-8 border-t-0 border-r-0 border-b-0 border-l-red-500 pl-2 ml-2 mt-2 mb-1">
              {courtInfo.mapName}
            </div>
            <div className="flex">
              <table className="ml-3 mt-1">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src={'/images/AddressIcon.svg'}
                        alt="BasketBall_icon"
                        width={20}
                        height={20}
                        className="mr-4"
                      />
                    </td>
                    <td>{courtInfo.mapAddress}</td>
                  </tr>
                </tbody>
              </table>

              <button
                type="button"
                onClick={() => handleSwitch()}
                className={`${
                  isUsing ? 'bg-green-500' : 'bg-gray-500'
                } text-white font-bold w-20 h-10 py-2 px-3 rounded ml-auto mr-3 whitespace-nowrap my-auto`}
              >
                {isUsing ? '使用中' : '未使用'}
              </button>
            </div>

            <div className="ml-3 mt-3">
              コートまで
              <span className="font-bold text-md text-red-500 ml-1 mr-1">
                {distance}km
              </span>
              あります。
            </div>

            <div className="flex items-center justify-center mt-2">
              <GoogleMap
                mapContainerStyle={{
                  width: '95%',
                  height: window.innerWidth <= 780 ? '50vh' : '60vh',
                }}
                zoom={10}
                onLoad={onLoad}
              >
                <MarkerF
                  visible={true}
                  position={userPos}
                  icon={iconPath.src}
                />
                <InfoWindow
                  position={userPos}
                  options={{ pixelOffset: new google.maps.Size(0, -42.5) }}
                >
                  <div>
                    <h1 className="text-md font-bold">I&apos;m here!</h1>
                  </div>
                </InfoWindow>
                <MarkerF visible={true} position={courtPos} />
                <InfoWindow
                  position={courtPos}
                  options={{ pixelOffset: new google.maps.Size(0, -37.5) }}
                >
                  <div>
                    <h1 className="text-md font-bold text-red-500">
                      The Court is here!
                    </h1>
                  </div>
                </InfoWindow>
              </GoogleMap>
            </div>
          </div>
        </>
      ) : (
        <div className="h-[calc(100%-96px)] w-full flex items-center justify-center bg-white">
          <div className="text-5xl font-bold text-gray-800 animate-bounce">
            Loading...🏀
          </div>
        </div>
      )}
    </>
  );
};

export default ViewMap;
