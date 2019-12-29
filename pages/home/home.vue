<template>
	<view>
		<view style="margin-top:40upx"></view>
		home
	</view>
</template>

<script>
	import { post , get } from '../util/request.js';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			post('test',{username:'yue',password:'123'},res=>{
				console.log(res);
			});
		}
	}
</script>

<style>

</style>
