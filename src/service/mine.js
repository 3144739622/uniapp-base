import { depositGet } from "@/service/api/mine.js";
import { getByUseing } from "@/service/api/store.js";

const mineAction = {
  depositGet: depositGet,
  getByUseing: async params => {
    const { data, code } = await getByUseing(params);
    return code == 1 ? data : '请求失败'
  }
}

module.exports = mineAction;