<template>
	<view>
		<view style="margin-top:40upx"></view>
		{{data}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:'你好，这是一个新页面'
			}
		},
		onLoad(props) {
			console.log('从index页面跳转过来的'+props.props);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
