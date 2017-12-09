<template>
	<div class="head-comp">
	   <h1 class="title">
	   	<img src="/static/images/logo.png" width="90" alt="bestkit">
	   </h1>

       <ul class="main-menu">
       	<li><router-link class="main-links"  to="/datas">数据</router-link></li>
       	<li><router-link class="main-links"  to="/users">用户管理</router-link></li>
       	<li><router-link class="main-links"  to="/communities">社区</router-link></li>
       	<li><router-link class="main-links"  to="/wikis">百科</router-link></li>
       	<li><router-link class="main-links"  to="/labs">实验室</router-link></li>
        <li><router-link class="main-links"  to="/masters">达人志</router-link></li>
       	<li><router-link class="main-links"  to="/seoes">SEO</router-link></li>
       	<li><router-link class="main-links"  to="/operators">运营管理</router-link></li>
       </ul>
	   <div class="infos">
	   	 <Badge class="tip">
	        <Icon type="ios-bell-outline" color="#fff" size="20"></Icon>
	     </Badge>
	   	 <img class="avator" src="/static/images/login.png" width="24" height="24" alt="头像">
	   	 <Icon class="down" type="chevron-down" color="#fff" size="14"></Icon>
	   </div>
	</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
	.head-comp {
		width:100%;
		min-width:1250px;
		height:86px;
		background: -webkit-linear-gradient(left, #3752d3 , #4ca0fe); /* Safari 5.1 - 6.0 */
	    background: -o-linear-gradient(right, #3752d3, #4ca0fe); /* Opera 11.1 - 12.0 */
	    background: -moz-linear-gradient(right, #3752d3, #4ca0fe); /* Firefox 3.6 - 15 */
	    background: linear-gradient(to right, #3752d3 , #4ca0fe); /* 标准的语法（必须放在最后） */ 
	    position: relative;
	}
	.title {
		display: inline-block;
		margin:0 40px 0 28px;
		color:#fff;
		font-size:30px;
		font-weight: 400;
		line-height: 86px;
		vertical-align: middle;
	}
	.main-menu {
		position:absolute;
		display: flex;
		top:0;
		left:240px;
		margin:0 auto;
		width:calc(100% - 480px);
		height: 86px;
		font-size:14px;
		color:#fff;
        line-height: 86px;
        font-weight: 200;
        vertical-align: middle;
	}
	.main-menu li {
		box-sizing:border-box;
		padding:0 20px;
        flex:1;
        text-align:center;
	}
	.main-links {
		color:#fff;
		font-weight: 500px;
		display: block;
		width:100%;
		height: 100%;
		line-height: 86px;
		text-align: center;
		box-sizing: border-box;
	}
	.main-links:hover {
        border-bottom:4px solid #e9eaec;
	}
	.infos {
		position: absolute;
		right:100px;
		top:34px;
	}
	.tip,.avator,.down {
		vertical-align: middle;
	}
	.tip {
		margin-right:30px;
	}
</style>