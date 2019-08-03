export function reLaunch(url,name,data){
	// 关闭所有页面，打开到应用内的某个页面
	uni.reLaunch({
		 url:url+'?'+name+'='+data
	});
}
export function navigateTo(url,name,data) {
	uni.navigateTo({
		url:url+'?'+name+'='+data
	})
}