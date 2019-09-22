<template>
	<view>
		<view style="margin-top:40upx"></view>
		hello android!
		<!-- #ifdef APP-PLUS -->
			<view @click = "camera" style="width:100px;height:50px;color:#fff;display:flex;justify-content:center;align-items:center;font-size:39upx;background:red;border-radius:20upx">拍照</view>
			<image :src="cameraUrl" style="width:750upx" mode=""></image>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cameraUrl:''
			}
		},
		methods: {
			camera(){
				 this.cmr.captureImage(res => {
					 this.cameraUrl = res;
				 	console.log(res)
				 })
			}
		},
		mounted(){
			// #ifdef APP-PLUS
				this.cmr = plus.camera.getCamera();
			// #endif
			
			 
		}
	}
</script>

<style>

</style>
