import { lAxios } from '../../pages/util/request.js';
export function wxpay (data,callBack) {
	 return lAxios('wxpay','POST',data,callBack);
}