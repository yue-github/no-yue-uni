import baseUrl from '../../config.js';
export function post (url,data,callBack) {
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
	uni.request({
		url: baseUrl+url, //仅为示例，并非真实接口地址。
		data:data?data:{},
		method:'POST',
		header: {
			'custom-header': 'X-Token' //自定义请求头信息
		},
		success: (res) => {
			if(callBack){
				callBack(res.data);
			}
			uni.hideLoading();
		},
		fail() {
			uni.hideLoading();
		}
	});
}
export function get (url,data,callBack) {
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
	uni.request({
		url: baseUrl+url, //仅为示例，并非真实接口地址。
		data:data?data:{},
		method:'GET',
		header: {
			'Authorization': token //自定义请求头信息
		},
		success: (res) => {
			if(callBack){
				callBack(res.data);
			}
			uni.hideLoading();
		},
		fail() {
			uni.hideLoading();
		}
	});
}
export function lAxios (url,type,data,callBack) {
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
				if(callBack){
					callBack(res.data);
				}
				uni.hideLoading();
				resolve(res.data);
			},
			fail() {
				uni.hideLoading();
			}
		});
	});
	return promise;
}