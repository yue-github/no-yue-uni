import { axios } from '@/utils/request.js';

// 微信支付接口
export function wxpay (data,callBack) {
	 return axios('wxpay','POST',data,callBack);
}