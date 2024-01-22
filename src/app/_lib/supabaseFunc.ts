import { supabase } from "./supabase";

// 都道府県をグループ化して各情報を取得
export const getCourtInfoByPref = async (
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
    console.error("Error fetching data!");
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
    console.error("Error fetching count!");
    return -1;
  }
};

// 登録済みのバスケットコートのIDで各情報を取得
export const getCourtInfo = async (map_id: string) => {
  try {
    const { data, error } = await supabase
      .from("BasketCourtMaps")
      .select("*")
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

// コートの使用状況を切り替える処理
export const switchIsUsing = async (map_id: string, isUsing: boolean) => {
  try {
    const { error } = await supabase
      .from("BasketCourtMaps")
      .update({ isUsing: !isUsing })
      .eq("map_id", map_id);

    if (error) {
      throw error;
    }

    // 以下、エラー時の処理
  } catch (error) {
    console.error("Error switching isUsing!");
  }
};
