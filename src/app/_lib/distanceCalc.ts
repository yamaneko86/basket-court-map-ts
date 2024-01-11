// 緯度・経度を用いた距離の計算
const distanceCalc = (
  curLat: number, //現在地の緯度
  curLon: number, //現在地の経度
  desLat: number, //目的地(バスケットコート)の緯度
  desLon: number //目的地(バスケットコート)の経度
): number => {
  // const R = 3958.8; //マイルの場合
  const R = 6371.071; //キロメートルの場合

  const rCurLat: number = curLat * (Math.PI / 180);
  const rDesLat: number = desLat * (Math.PI / 180);
  const diffLat: number = rDesLat - rCurLat; // 緯度の差

  const rCurLon: number = curLon * (Math.PI / 180);
  const rDesLon: number = desLon * (Math.PI / 180);
  const diffLon: number = rCurLon - rDesLon; // 経度の差

  const value: number =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
          Math.cos(rCurLat) *
            Math.cos(rDesLat) *
            Math.sin(diffLon / 2) *
            Math.sin(diffLon / 2)
      )
    );

  // 小数第2位まで表示(x.xxkm)
  const distance: number = Math.round(value * 100) / 100;

  return distance;
};

// console.log(distanceCalc(40.7767644, -73.9761399, 40.771209, -73.9673991));
