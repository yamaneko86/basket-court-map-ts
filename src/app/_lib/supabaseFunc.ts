import { supabase } from "./supabase";

// 都道府県をグループ化して各情報を取得
export const getCourtInfo = async (
  lower_limit: number,
  upper_limit: number
) => {
  try {
    const { data, error } = await supabase
      .from("BasketCourtMaps")
      .select("*")
      .gte("prefecture_code", lower_limit) //greater than or equal
      .lte("prefecture_code", upper_limit); //less than or equal

    if (error) {
      throw error;
    }

    // コートの数を返す
    return data;

    // 以下、エラー時の処理
  } catch (error) {
    console.error("Error fetching count");
    return null;
  }
};

// 都道府県をグループ化してコート件数を取得
export const getCountOfCourts = async (
  lower_limit: number,
  upper_limit: number
) => {
  try {
    const { count, error } = await supabase
      .from("BasketCourtMaps")
      .select("*", { count: "exact", head: true })
      .gte("prefecture_code", lower_limit)
      .lte("prefecture_code", upper_limit);

    if (error) {
      throw error;
    }

    // コートの数を返す
    return count;

    // 以下、エラー時の処理
  } catch (error) {
    console.error("Error fetching count");
    return -1;
  }
};

// 登録済みのバスケットコートのIDで緯度経度を取得
export const getCourtLatLng = async (map_id: string) => {
  try {
    const { data, error } = await supabase
      .from("BasketCourtMaps")
      .select("latitude, longitude")
      .eq("map_id", map_id);

    if (error) {
      throw error;
    }

    // コートの緯度・経度を返す
    return data;

    // 以下、エラー時の処理
  } catch (error) {
    console.error("Error fetching data!");
  }
};
