// 緯度・経度を用いた距離の計算
export const distanceCalc = (
  curLat: number, //現在地の緯度
  curLng: number, //現在地の経度
  desLat: number, //目的地(バスケットコート)の緯度
  desLng: number //目的地(バスケットコート)の経度
): number => {
  // const R = 3958.8; //マイルの場合
  const R = 6371.071; //キロメートルの場合

  const rCurLat: number = curLat * (Math.PI / 180);
  const rDesLat: number = desLat * (Math.PI / 180);
  const diffLat: number = rDesLat - rCurLat; // 緯度の差

  const rCurLng: number = curLng * (Math.PI / 180);
  const rDesLng: number = desLng * (Math.PI / 180);
  const diffLng: number = rCurLng - rDesLng; // 経度の差

  const value: number =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
          Math.cos(rCurLat) *
            Math.cos(rDesLat) *
            Math.sin(diffLng / 2) *
            Math.sin(diffLng / 2)
      )
    );

  // 小数第2位まで表示(x.xxkm)
  const distance: number = Math.round(value * 100) / 100;

  return distance;
};
