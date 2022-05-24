import { http } from "@/utils/http.js"
const mineApi = {
  depositGet: params => http('system-parameter-entity/pp/list', params, 'get')
};
module.exports = mineApi;