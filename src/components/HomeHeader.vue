<!-- HomeHeader.vue -->
<template>
	<header class="header">
		<div class="header_inner">           
			<div class="header_cont"> 
            <router-link to="/Home">主页</router-link>
            <router-link to="/About">详情</router-link>
            <router-link to="/GuanYu/1">关于1</router-link> 
			<router-link to="/GuanYu/2">关于2</router-link> 
			<router-link :to="{path:'/GuanYu/3',query:{color:'yellow'}}">关于3</router-link>
			<router-link to="/About/attend">附加信息1</router-link>
			<router-link to="/About/newattend">附加信息2</router-link>
            </div>
		</div>
	</header>
</template>

<style>
	.header {
		height: 0.88rem;
	}
	.header_inner {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		max-width: 640px;
		height: 0.88rem;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 0 0.24rem;
		border-bottom: 0.02rem solid #80ccd6;
		background-color: #fff;
	}
	.header_cont {
		text-align: center;
		padding: 0 0.4rem;
		line-height: 0.86rem;
		font-size: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>