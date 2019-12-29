<template>
	<view>
		<view>
			<view class="home-top">
				<view class="home-top-pos">
					<view class="home-top-pos-detail">
						
					</view>
				</view>
				<view class="home-top-nav-main">
					<view class="home-top-nav">
						<view class="home-top-nav-detail" :style="{height:navDetailHeight+'px'}" v-show="navDetailHideShow">
							<view class="home-top-nav-detail-content" :style="{top:detailConTop+'px'}">
								<view class="home-top-nav-detail-con-sel" v-for="(item,index) in [{name:'巡逻防控',url:require('./img/dunPai.png')},{name:'巡逻防控',url:require('./img/dunPai.png')},{name:'巡逻防控',url:require('./img/dunPai.png')},{name:'小钥匙',url:require('./img/dunPai.png')}]"
								 :key="index">
									<img :src="item.url" class="home-top-nav-detail-con-sel-img" alt="">
									<text>{{ item.name }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="scroll-home-main">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y scroll-home" @scrolltoupper="upper"
				 @scrolltolower="lower" @scroll="scroll" show-scrollbar="false">
					<view class="home-scroll-block">
						123
					</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">d</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">e</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">a</view>
				</scroll-view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 头部导航栏绝对定位的盒子的top值-》目的产生碰撞效果
				detailConTop: 0,
				// 头部导航栏相对定位的盒子的height值-》目的产生擦除覆盖效果
				navDetailHeight: 80,
				// 用于在滚动块向上移动过程中加倍往上消减
				addHeight:0,
				// 控制会动的导航栏消失与出现
				navDetailHideShow:true,
				scrollTop: 0,
			}
		},
		methods: {
			upper: function(e) {
			},
			lower: function(e) {
			},
			scroll: function(e) {
				// 作用是避免高度没有恢复原样
				if(e.detail.scrollTop < 22) this.addHeight = 0;
				// 会动的导航栏增减它的高度
				this.navDetailHeight = 80 - e.detail.scrollTop - this.addHeight;
				// 在一定范围内让头部会动的导航栏往上移和增加往上消减速度
				if(e.detail.scrollTop > 22&&e.detail.scrollTop < 45) {
					this.detailConTop = 22 - e.detail.scrollTop;
					this.addHeight = e.detail.scrollTop - 22;
				}
				// 防止在滚动位置小于22手离开滑块时,该会动的导航栏距离顶部的top不为0
				if(e.detail.scrollTop < 22&&this.detailConTop < 0){
					this.detailConTop = 0;
				}
				// 控制导航栏消失与出现
				if(e.detail.scrollTop > 45){
					this.navDetailHideShow = false;
				}else{
					this.navDetailHideShow = true;
				} 
			}
		}
	}
</script>

<style scoped>
	.scroll-home-main {
		width:100%;
		position: absolute;
		z-index: 1;
		margin-top:15vh;
	}
	
	.scroll-home {
		width: 710upx !important;
		height:85vh!important;
		position: relative;
		margin: 0 auto;
	}

	.home-scroll-block {
		height: 200px;
		border-radius: 8px 8px 0px 0px;
		background: #F0F0F0;
		margin-top:110px;
	}

	.home-top {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.home-top-pos-detail{
		
	}

	.home-top-pos {
		width: 100%;
		height: 15vh;
		background: green;
	}

	.home-top-nav-main {
		width: 100%;
		height: 110px;
		/* background:blue; */
		position: relative;
		z-index:2;
	}

	.home-top-bottom {
		width: 100%;
		height: 110px;
		background-image: linear-gradient(#E50112, #fff, #fff, #fff);
	}
	
	.home-top-nav {
		width: 100%;
		height: 80px;
		position: relative;
		position: absolute;
		bottom:8px;
	}

	.home-top-nav-detail {
		width: 680upx;
		position: relative;
		margin: 0 auto;
		background: pink;
		overflow: hidden;
	}

	.home-top-nav-detail-content {
		width: 680upx;
		height: 75px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
	}

	.home-top-nav-detail-con-sel {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #fff;
		font-size: 14px;
	}

	.home-top-nav-detail-con-sel-img {
		width: 40px;
		height: 40px;
		margin-bottom:5px;
	}

	

</style>
