<script>
	import { loginWx } from './api/user';
	export default {
		globalData: {  
            text: 'vue与nvue通用的全局变量管理'  
        },  
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef MP-WEIXIN
			uni.login({
				provider: 'weixin',
				success(res){
					getApp().globalData.code=res.code;
					loginWx({
						code:res.code
					})
					.then(res=>{
						 getApp().globalData.token=res.token;
						 
						 console.log(res);
					})
				}
			})
			// #endif
		},
		onShow: function() {
			console.log('App Show')
			// #ifdef MP-WEIXIN
			  
			// #endif
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import './common/uni.css';
	/*每个页面公共css */
</style>
