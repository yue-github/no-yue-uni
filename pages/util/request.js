import baseUrl from '../../config.js';
import { showLoading, hideLoading } from './animation.js';
export function post (url,data,callBack) {
	showLoading();
    let token=uni.getStorageSync('token');
	// 假定有token
	token ? token = token : token = true;
	// TOKEN拦截判断有无处理
	if (token) {
		token='Bearer '+token;
	}else{
		// 跳转登录页面
		return false;
	}
	if(typeof(data)=='function'){
		callBack=data;
	}
	uni.request({
		url: url.includes('http')?url:baseUrl+url, //仅为示例，并非真实接口地址。
		data:typeof(data)=='object'?data:{},
		method:'POST',
		header: {
			'Authorization': token //自定义请求头信息
		},
		success: (res) => {
			if(callBack){
				callBack(res.data);
			}
			hideLoading();
		},
		fail() {
			hideLoading();
		}
	});
}
export function get (url,data,callBack) {
	showLoading();
    let token=uni.getStorageSync('token');
	// 假定有token
	token=true;
	// TOKEN拦截判断有无处理
	if (token) {
		token='Bearer '+token;
	}else{
		// 跳转登录页面
		return false;
	}
	if(typeof(data)=='function'){
		callBack=data;
	}
	uni.request({
		url: url.includes('http')?url:baseUrl+url, //仅为示例，并非真实接口地址。
		data:typeof(data)=='object'?data:{},
		method:'GET',
		header: {
			'Authorization': token //自定义请求头信息
		},
		success: (res) => {
			if(callBack){
				callBack(res.data);
			}
			hideLoading();
		},
		fail() {
			hideLoading();
		}
	});
}
export function lAxios (url,type,data,callBack) {
	showLoading();
	let token=uni.getStorageSync('token');
	// TOKEN拦截判断有无处理
	if (token) {
		token='Bearer '+token;
	}else{
		// 跳转登录页面
		// return false;
	}
	let promise=new Promise((resolve,reject)=>{
		uni.request({
			url: baseUrl+url, //仅为示例，并非真实接口地址。
			data:data?data:{},
			method:type,
			header: {
				'Authorization': token //自定义请求头信息
			},
			success: (res) => {
				if(url == 'login') {
					try {
						uni.setStorageSync('token', res.data.token);
					} catch (e) {
						// error
					}
				}
				if(callBack){
					callBack(res.data);
				}
				hideLoading();
				resolve(res.data);
			},
			fail() {
				hideLoading();
			}
		});
	});
	return promise;
}
/**author:吴同岳
 * 时间:2019-10-12
 * contact:18814137320
 * 微信:wty1079051908
 * qq:1079051908
 */ 
