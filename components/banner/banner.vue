<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper 
					class="swiper" 
					:indicator-dots="indicatorDots" 
					:autoplay="autoplay" 
					:interval="interval" 
					:duration="duration"
					:circular="circular">
                        <swiper-item>
                            <view class="swiper-item uni-bg-red">A</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item uni-bg-green">B</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item uni-bg-blue">C</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular:true
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style>
.swiper-item{
	display: flex;
	width:100%;
	height:300upx;
	justify-content: center;
	align-items: center;
	
}
.uni-padding-wrap{
	width:100%;
	box-sizing: border-box;
	margin:0;
	padding:0;
}
</style>
