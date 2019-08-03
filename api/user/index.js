import { lAxios } from '../../pages/util/request.js';
export function loginWx (data,callBack) {
	 return lAxios('wx/wx_login','POST',data,callBack);
}
export function login (data,callBack) {
	 return lAxios('login','POST',data,callBack);
}