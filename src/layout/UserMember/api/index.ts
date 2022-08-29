import request from '../../../api/request1';
import qs from 'qs';
const flag =
  process.env.NODE_ENV !== 'development' ? '/extension' : '/extension';
// let paramsSerializer = function (p: any) {
//   return qs.stringify(p, { arrayFormat: 'repeat' })
// }
export default {
  // 获取数据
  getData: request.post(flag + `/mall/member`, {}),
};
