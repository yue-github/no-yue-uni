<template>
	<view class="content">
		<view class="code" @click="getCode()">code</view>
		<view class="code" @click="toLogin()">login</view>
		<image :src="codeImg" mode="" style="width:200px;height:50px"></image>
		<!-- 自测v-for -->
		<view v-for="(item,index) in data" :key="index" class="user-main">
			<image :src="item.img" mode="widthFix" class="user-img" @click="goOtherPage(index)"></image>
			<view class="user-content">
				 <view>{{item.name}}：</view>
				 <view>{{item.age}}</view>
			</view>
		</view>
		<!-- TAG标签展示 -->
		<view class="tag-view">
			<uni-tag text="本地异步缓存" type="primary" @click="bindClickPrimary"></uni-tag>
			<uni-tag text="地图选择位置" type="error" :circle="true" @click="bindClickError"></uni-tag>
			<uni-tag text="获取异步缓存" @click="bindClickGray"></uni-tag>
			<uni-tag :text="requestText" @click="bindClickWarning" type="warning" style="margin-top:10upx"></uni-tag>
			<uni-tag text="不同端打印不同的结果" @click="bindClickIf" type="warning" style="margin-top:10upx"></uni-tag>
			<uni-tag text="utilRequest" @click="bindClickUtilRequest" type="warning" style="margin-top:10upx"></uni-tag>
			<uni-tag text="异步封装调用" @click="bindClickApi" type="warning" style="margin-top:10upx"></uni-tag>
			<!-- #ifdef MP-WEIXIN -->
				<button type="primary" :loading="loading_is" style="margin-top:10px" open-type="getUserInfo" @getuserinfo="getUserInfo">微信授权</button>
				<uni-tag text="获取微信openid" type="primary" @click="getOpenId"></uni-tag>
			<!-- #endif -->
			<uni-tag text="vue到nvue跳转" type="primary" @click="navigateToNvue" style="margin-top:10upx"></uni-tag>
			<wxpay></wxpay>
		</view>
		<!-- 产品块 -->
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index" @click="showToast(index)">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
					<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
					<text class="uni-product-tip">{{product.tip}}</text>
				</view>
			</view>
		</view>
		<!-- 新闻列表 -->
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.img"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.content}}</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { reLaunch , navigateTo } from '../util/toWhatPage.js';
	import { showLoading , hideLoading , showToast} from '../util/animation.js';
	import { post , get } from '../util/request.js';
	import uniTag from "./../../components/uni-tag/uni-tag.vue";
	import wxpay from "./../../components/wxpay/wxpay.vue";
	import { apiTest , needToken } from '../../api/test';
	// 状态管理映射
	import { mapMutations } from 'vuex';
	import { loginWx , login } from '@/api/user';
	let navigatorJs = require("@/jsTools/navigator.js");
	export default {
		data() {
			return {
				codeImg:'',
				webPay:'<h1>121212</h1>',
				 loading_is:false,
				// tag名称
				 requestText:'发动请求',
				 // 自测v-for数据
				 data:[
					 {
						 name:'wutongyue',
						 age:'26',
						 img:require('./img/cat.png')
					 },
					 {
						 name:'msy',
						 age:'26',
						 img:require('./img/red_cat.png')
					 }
				 ],
				 // 产品块数据
				 renderImage:true,
				 productList:[
					 {
						 title:'测试标题',
						 image:require('./img/red_cat.png'),
						 originalPrice:'666',
						 favourPrice:'888',
						 tip:'火爆促销'
					 },
					 {
						 title:'测试标题',
						 image:require('./img/red_cat.png'),
						 originalPrice:'666',
						 favourPrice:'888',
						 tip:'实惠'
					 },
					 {
						 title:'测试标题',
						 image:require('./img/red_cat.png'),
						 originalPrice:'666',
						 favourPrice:'888',
						 tip:'最低价'
					 },
				 ],
				 // 新闻标题列表数据
				 list:[
					 {
						 title:'标题',
						 img:require('./img/red_cat.png'),
						 content:'你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界'
					 },
					 {
						 title:'标题',
						 img:require('./img/red_cat.png'),
						 content:'你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界'
					 },
					 {
						 title:'标题',
						 img:require('./img/red_cat.png'),
						 content:'你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界'
					 },
				 ]
			}
		},
		components: {
			uniTag,
			wxpay
		},
		onPageScroll(){
			console.log(123)
		},
		// 页面加载时
		onLoad() {
			// uni.request({
			// 	url:'/yue/index.php/Manage/Mess/ajax_send/type_id/1',
			// 	method:'GET',
			// 	success:res=>{
			// 		console.log(res)
			// 	}
			// })
			// setInterval(res=>{
			// 	this.crash();
			// },60000)
			login({username:'super_admin',password:'1'})
			.then(res=>{
			 console.log(res);
			})
			// get("/yue/study/memberLogin.do",{
			// 	memberCode:"410102198504210011",
			// 	password:"123456",
			// 	validateCode:"1234",
			// 	rememberForm:false,
			// 	_:'1578915402177'
			// },res=>{
			// 	console.log(res)
			// })
			 
			// 支付寶支付測試
			// post('alipay',{
			// 	
			// },res=>{
			// 	this.webPay = res;
			// })
			// 全局变量测试
			// console.log(getApp().globalData.text);
			// console.log(this.$store.state.token);
			// 状态管理测试
			// this.$store.commit('doCommit','commit---');
			// this.$store.dispatch('doDispatch','hello displatch');
			// console.log(this.$store.getters.doGetters);
			// 一般数据请求测试
			apiTest()
			.then(res=>{
				console.log(res)
			})
		},
		onReady(){
			this.doMutations('测试mutations');
		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
				// uni.startPullDownRefresh();
			}, 1500);
		},
		// 页面触底事件
		onReachBottom(){
			setTimeout(res=>{
				uni.hideLoading();
				console.log('触底结束');
			},1500)
			this.showLoading();
			console.log('触底事件');
		},
		methods: {
			crash(){
				try{
					get('/yue/js/common/messages_cn.js?_=1575034139222',res=>{
						let	boo = true;
						if(typeof res == 'string'){
							if(!res.includes('该字段不能为空'))
								boo = false;
								console.log(boo);
							if(!boo){
								if(this.innerAudioContext)
									this.innerAudioContext.destroy();
								this.innerAudioContext = uni.createInnerAudioContext();
								this.innerAudioContext.autoplay = true;
								this.innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
							}
							if(!boo){
								post('crash',{type:'success'},res=>{
									console.log(res);
								});
							}
						}
					},res=>{
						console.log(11111)
						if(this.innerAudioContext)
							this.innerAudioContext.destroy();
						this.innerAudioContext = uni.createInnerAudioContext();
						this.innerAudioContext.autoplay = true;
						this.innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
						post('crash',{type:'fail'},res=>{
							console.log(res);
						});
					})
				}catch(e){
					console.log(22222)
					post('crash',{type:'catch'},res=>{
						console.log(res);
					});
				}
			},
			// 微信获取openid
			getOpenId(){
				uni.login({
					provider: 'weixin',
					success(res){
						loginWx({
							code:res.code
						})
						.then(res=>{
							 console.log(res);
						})
					}
				})
			},
			// 显示提示信息
			showToast(index){
				index==0?
				 uni.showToast({
				 	title: '你好，世界',
				 	icon: 'success'
				 }):
				 this.showLoading();
			},
			// 加载动画
			showLoading(){
				uni.showLoading({
					title: '加载中...',
					mask: true,
				    duration: 1600
				});
			},
			// 跳转页面
			goOtherPage(index){
				console.log('页面跳转');
				// 有返回跳转
				navigateTo('/pages/otherPage/otherPage','props',index);
				// 关闭所有页面，打开到应用内的某个页面
				// reLaunch('/pages/otherPage/otherPage','props',index);
			},
			// 本地缓存
			bindClickPrimary(){
				uni.setStorage({
					key: 'name',
					data: '梧桐叶',
					success: function () {
						console.log('本地缓存success');
					}
				});
				
			},
			// 打开地图选择位置
			bindClickError(){
				uni.chooseLocation({
					success: function (res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});
			},
			// 获取本地缓存
			bindClickGray(){
				uni.getStorage({
					key: 'name',
					success: function (res) {
						console.log('本地获取缓存成功，数据为：'+res.data);
					}
				});
			},
			// 发送请求
			bindClickWarning(){
				this.requestText="发动请求中..."
				showLoading();
				let me=this;
				uni.request({
					url: 'https://coral3.com/yes/public/api/test',
					data: {
						text: 'uni.request'
					},
					header: {
						'Authorization': 'Bearer ' //自定义请求头信息
					},
					success: (res) => {
						console.log(res.data);
						this.requestText = '发动请求';
						hideLoading();
						showToast('发动成功','success')
					},
					fail() {
						if(this) {
							this.requestText = '发动请求'
						}else{
							me.requestText='发动请求'
						}
						showToast('发动失败','none')
						hideLoading();
					}
				});
			},
			// util请求封装
			bindClickUtilRequest(){
				 post('test',{
					 name:'wutongyue'
				 },res=>{
					 console.log(res)
				 });
			},
			// api异步封装调用测试
			bindClickApi(){
				showLoading();
				apiTest({
					name:'请'
				})
				.then(res=>{
					console.log(res);
				})
			},
			// 状态管理mutation映射
			...mapMutations(['doCommit','doMutations']),
			getUserInfo(res){
				console.log(res);
			},
			// 跨平台if条件
			bindClickIf(){
				// #ifdef MP-WEIXIN
					console.log('only in mp-weixin show');
				// #endif
				// #ifdef H5
					console.log('only in H5 show');
				// #endif
				// #ifdef APP-PLUS
					console.log('only in android-app show');
				// #endif
			},
			// 通用跳转
			navigateToNvue(){
				navigatorJs.navigateTo({
					url: '../nvueTest/nvueTest?name=wutongyue333'
				});
			},
			getCode(){
				get("/yue/study/genValidateCode.do",{
					_:'0.21282345295557104'
				},res=>{
					console.log(res)
					this.codeImg='';
				})
			},
			toLogin(){
				get("/yue/study/memberLogin.do",{
					memberCode:"410102198504210011",
					password:"123456",
					validateCode:"1234",
					rememberForm:false,
					_:'1578915402177'
				},res=>{
					console.log(res)
					// post("http://service.eebin.com/webapp/confirm/saveOrder",{
					// 	token:res.token
					// },res=>{
					// 	console.log(res);
					// })
					console.log(res)
				})
			}
		
			
		},
		onReady(){
			
		 }
	}
</script>

<style>
	.user-main{
		width:100%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding:0 10upx;
		margin-top:40upx;
	}
	.user-img{
		width:100upx;
		margin-right:8upx
	}
	.user-content{
		display: flex;
		align-items: center;
	}
	.uni-product-tip{
		border-radius:20upx;
		background:#f40;
	}
	.tag-view{
		width:100%;
		box-sizing: border-box;
		padding:10px;
		display:flex;
		flex-wrap:wrap;
		justify-content: space-between;
	}
</style>
