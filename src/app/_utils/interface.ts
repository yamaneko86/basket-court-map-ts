// マップIDを受け取る時のインターフェース
interface MapId {
  map_id: string;
}

// 都道府県コードを受け取る時のインターフェース
interface PrefectureCodes {
  lower_limit: number;
  upper_limit: number;
}

// コート情報を受け取る時のインターフェース
interface CourtInfo {
  map_id: string;
  prefecture_code: number;
  map_name: string;
  map_address: string;
  latitude: number;
  longitude: number;
  isUsing: boolean;
}

// interface LatLng {
//   latitude: number;
//   longitude: number;
// }
