<template>
	<view>
		123
	</view>
</template>

<script>
	import { post } from '@/utils/request.js';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onReady(){
			post('t',res=>{
				console.log(res);
			})
		}
	}
</script>

<style>

</style>
