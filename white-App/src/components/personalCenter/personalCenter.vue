<template>
	<div>
		<m-header :title="'个人中心'" ></m-header>
		<div class="center-tab">
			<scroll ref="scroll" class="scroll-main" :data='itemList'>
				<div>
					<div class="avatar-name">
						<img src="http://dummyimage.com/100x100/4d494d/686a82.gif&text=Avatar" alt="Avatar" />
						<p>小白</p>
					</div>
					<div class="item-list">
						<p v-for="(item, i) in itemList">
							<router-link :to="item.link">
								<span :class="'icon-'+item.icon"></span>
								{{item.name}}
								<i></i>
							</router-link>
						</p>
					</div>
					<div class="logout">
						<button>退出</button>
					</div>
				</div>
			</scroll>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Scroll from 'base/scroll/scroll'
	export default {
		created(){
			 setTimeout(()=>{
					 this.$refs.scroll.refresh()
			 },20)
		},
		data() {
			return {
				itemList: [{
					name: '我的小白币', 
					icon: 'money', 
					link: '/personalCenter'
				}, {
					name: '我的账套',
					icon: 'zhangtao', 
					link: '/personalCenter'
				}, {
					name: '我的分享',
					icon: 'fenxiang', 
					link: '/personalCenter'
				}, {
					name: '我的同事',
					icon: 'tongshi', 
					link: '/personalCenter'
				}, {
					name: '我的学习视频',
					icon: 'shipin', 
					link: '/personalCenter'
				}, {
					name: '我的寻求协助',
					icon: 'qiuzhu', 
					link: '/personalCenter'
				}, {
					name: '我的反馈',
					icon: 'fankui', 
					link: '/personalCenter'
				}, {
					name: '设置',
					icon: 'shezhi', 
					link: '/personalCenter'
				}]
			}
		}, 
		components: {
			Scroll
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"

	.center-tab
		position: fixed
		width: 100%
		top: 44px
		bottom: 50px
		.scroll-main
			height: 100%
			overflow: hidden
			background: linear-gradient(to bottom, #3fc6c1 50%, #E6E6E6 50%, #E6E6E6 100%)
			>div
				background: #E6E6E6
			.avatar-name
				height: 150px
				width: 100%
				display: flex;
				flex-direction: column
				justify-content: flex-end
				align-items: center
				background: radial-gradient(circle at 50% -1030px, $public-color 1100px, $color-background 0)
				img
					width: 70px
					border-radius: 50%
					border: 2px solid transparent;
					box-shadow: 0px 0px 10px #999;
				p
					margin: 15px auto
					font-size: 18px
			.item-list
				display: flex
				flex-direction: column
				justify-content: center
				align-items: center
				p
					position: relative
					width: 100%
					height: 45px
					line-height: 45px
					padding: 0 10px
					background: $color-background
					a
						display: block;
						width: 100%;
						height: 100%;
					span
						margin-right: 10px
						color: $public-color
					&:first-child
						margin-top: 15px
						span
							color: #ED9233
					&:nth-child(3)
						margin-top: 15px
					&:nth-child(odd)
						border-bottom: 1px solid #CFCFCF
					&:nth-child(even)
						border-bottom: 1px solid #EFEFEF
					i
						position: absolute
						right: 20px;
						top: 50%;
						margin-top: -2px;
						&:before
							content:''
							display:block
							height:2px
							width:12px
							background:#E1E1E1
							transform:rotate(45deg) translateY(-4px)
							border-radius:8px
						&:after
							content:''
							display:block
							height:2px
							width:12px
							background:#E1E1E1
							transform:rotate(-45deg) translateY(4px)
							border-radius:8px
			.logout
				width: 90%
				margin: 0 auto;
				text-align: center
				padding: 15px 0
				button
					width: 100%
					height: 30px
					border: none
					border-radius: 6px
					color: $color-background
					background: #CF5157


</style>
