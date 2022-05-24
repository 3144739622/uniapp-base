import { http } from "@/utils/http.js"
const storeApi = {
  getByUseing: params => http('manager-entity/pp/get', params, 'get')

};
module.exports = storeApi;