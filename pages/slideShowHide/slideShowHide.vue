<template>
	<view>
		<view class="bg-top" @touchmove.stop="">
			<view class="bg-top-position" v-show="posBoo">你好我是位置栏</view>
			<view class="bg-top-nav" v-show="navBoo">导航栏</view>
		</view>
		<view class="bg-center" :style="{height:BCHeight+'px'}" @touchmove.stop="">
			<view class="bg-center-detail" :style="{height:CDHeight+'px'}" v-if="CDBooShowHide">
				<view class="bg-center-detail-content" :style="{marginTop:DCMarginTop+'px'}">
					<view class="bg-center-detail-content-sel" v-for="(item,index) in [{name:'巡逻防控',url:require('./img/dunPai.png')},{name:'巡逻防控',url:require('./img/dunPai.png')},{name:'巡逻防控',url:require('./img/dunPai.png')},{name:'小钥匙',url:require('./img/dunPai.png')}]"
					 :key="index" @click="navClick">
						<img :src="item.url" class="bg-center-detail-content-sel-img" alt="">
						<text>{{ item.name }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="scroll" @touchend="scrollTouchEnd" @touchstart="scrollTouchStart">
			scroll
		</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
		<view>1</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				endScrollTop:0,
				// 顶部小导航栏显示隐藏导航栏布尔值
				navBoo:true,
				// 顶部位置显示与隐藏布尔值
				posBoo:false,
				// 中部与scroll滚动块上面盒子的高度->擦除效果
				BCHeight:100,
				// 中部与scroll滚动块上面盒子的孩子的高度->擦除效果
				CDHeight:70,
				// 控制大导航显隐参数
				CDBooShowHide:true,
				// 大导航上边距的动态参数
				DCMarginTop:0,
				// 增加向上擦除的参数
				addMarginTop:0,
				query:null,
				scrollDom:null
			}
		},
		mounted(){
		},
		methods: {
			// 触摸开始的回调函数
			scrollTouchStart(){
				this.startTime = new Date();
			},
			// 触摸结束时回调函数
			scrollTouchEnd(){
				let theTime = new Date() - this.startTime;
				// console.log(theTime);
				console.log(this.endScrollTop);
				const endScrollTop = this.endScrollTop;
				if(endScrollTop>=0&&endScrollTop<=40){
					uni.pageScrollTo({
						duration:200,
						scrollTop:0
					})
				}else if(endScrollTop>40&&endScrollTop<=98){
					uni.pageScrollTo({
						duration:200,
						scrollTop:98
					})
				}
			},
			// 大导航点击测试
			navClick(){
				console.log('你点击了大导航');
			}
		},
		onPageScroll(o){
			let scrollTop = o.scrollTop;
			this.endScrollTop = scrollTop;
			// 控制大导航显隐
			if(scrollTop >= 40){
				this.CDBooShowHide = false;
			}else{
				this.CDBooShowHide = true;
			}
			// 大导航移动效果+加快擦除
			if(scrollTop >= 25){
				this.DCMarginTop = 25 - scrollTop;
				this.addMarginTop = -this.DCMarginTop;
			}else{
				this.addMarginTop = this.DCMarginTop = 0;
			}
			// 擦除效果
			this.CDHeight = 70 - scrollTop - this.addMarginTop;
		}
	}
</script>

<style>
	.bg-top{
		width:100%;
		height:100px;
		background:red;
		position:fixed;
		top:0;
		z-index: 2;
	}
	.bg-top-position{
		width:100%;
		height:100px;
		display:flex;
		justify-content: center;
		align-items: center;
		position:absolute;
		top:0;
		left:0;
	}
	.bg-top-nav{
		width:100%;
		height:100px;
		display:flex;
		justify-content: center;
		align-items: center;
		position:absolute;
		top:0;
		left:0;
	}
	.bg-center{
		width:100%;
		height:100px;
		background:pink;
		position:fixed;
		top:100px;
		opacity:0.8;
		
	}
	.bg-center-detail{
		width:100%;
		height:70px;
		position:absolute;
		top:15px;
		/* bottom:15px; */
		background:yellow;
		overflow:hidden;
	}
	.bg-center-detail-content{
		width:680upx;
		height:70px;
		display:flex;
		justify-content: space-between;
		background:blue;
		margin:0 auto;
	}
	.bg-center-detail-content-sel {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #fff;
		font-size: 14px;
	}
	
	.bg-center-detail-content-sel-img {
		width: 40px;
		height: 40px;
		margin-bottom:5px;
	}
	.scroll{
		width:700upx;
		height:500px;
		position:relative;
		margin:0 auto;
		background:#ccc;
		margin-top:200px;
		border-radius: 8px 8px 0px 0px;
		z-index: 1;
	}
</style>
