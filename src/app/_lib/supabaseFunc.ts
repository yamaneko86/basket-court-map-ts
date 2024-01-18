import { supabase } from "./supabase";

// 都道府県をグループ化してコート件数を取得
export const getCountOfCourts = async (
  lower_limit: number,
  upper_limit: number
) => {
  try {
    const { count, error } = await supabase
      .from("BasketCourtMaps")
      .select("*", { count: "exact", head: true })
      .gte("prefecture_code", lower_limit) //greater than or equal
      .lte("prefecture_code", upper_limit); //less than or equal

    if (error) {
      throw error;
    }

    // コートの数を返す
    return count;
  } catch (error) {
    console.error("Error fetching count");
    return -1;
  }
};
