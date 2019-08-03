import { lAxios } from '../../pages/util/request.js';
export function apiTest (data,callBack) {
	 return lAxios('test','POST',data,callBack);
}
export function needToken (data,callBack) {
	 return lAxios('needToken','POST',data,callBack);
}