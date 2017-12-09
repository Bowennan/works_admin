<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="lists-box">
                <Submenu name="user">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="list-icon">
 								<Icon type="ios-paper" size=16 class="iconfont"></Icon>
						        <span class="icon-name">通用帖子管理</span>
 							</span>
                        </div>
                    </template>
                    <MenuItem name="1-1" class="sublist">
                      <router-link to="/communities" class="list-icon sublist-sub">帖子列表</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-2" class="sublist">
                      <router-link to="/communities/tbcp" class="list-icon sublist-sub">待审核帖子</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-3" class="sublist">
                      <router-link to="/communities/ap" class="list-icon sublist-sub">异常帖子</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="check">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="list-icon checked">
                        		<Icon type="chatbox-working" size=16 class="iconfont"></Icon>
                        		<span class="icon-name">通用评论管理</span>
                        	</span>
                        </div>
                    </template>
	                    <MenuItem name="3-1" class="sublist">
	                      <router-link to="/communities/cl" class="list-icon sublist-sub">评论列表</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-2" class="sublist">
	                      <router-link to="/communities/tbcc" class="list-icon sublist-sub">待审核评论</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-3" class="sublist">
	                      <router-link to="/communities/ac" class="list-icon sublist-sub">异常评论</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
                </Submenu>
            </Menu>

            <div class="views">
            	<router-view></router-view>
            </div>
	</div>
</template>

<script>
	export default {
       data() {
       	return {
       		theme: "light"
       	}
       }
	}
</script>

<style scoped>
	  .aside-box {
	    position:relative;
	    box-sizing: border-box;
	    width:100%;
	    height: 100%;
	    padding-left:240px;
	  }
    .lists-box {
    	box-sizing: border-box;
    	font-size:12px;
    	width: 240px;
	    border-bottom: 1px solid #dddee1;
	    padding-bottom: 30px;
	    position: absolute;
	    top:0;
	    left:0;
    }
    .views {
    	position:absolute;
    	right: 0;
    	top:0;
    	left:240px;
    }
    .title {
    	margin-left:28px;
    }
    .avator {
    	margin-left:10px;
    }
    .avator,.name {
    	vertical-align: top;
    }
	.name {
		font-size:12px;
		color:#3a8ce6;
	}
	.sublist {
		height:46px;
		box-sizing: border-box;
		font-size:12px !important;
		color:#80848f;
		position: relative;
		font-weight:bold;
	}
	.badge-scale {
		position: absolute;
		right:20px;
		transform: scale(0.8,0.65);
	}
	.list-avator {
		color:#2b85e4 !important;
	}
	.list-icon {
		position: absolute;
		top:0;
		left:0;
		display: block;
		width:100%;
		height:46px;
		line-height: 46px;
		box-sizing: border-box;
		padding-left:30px;
		background-size:18px 18px;
		background-position: 28px center;
		background-repeat: no-repeat;
		color:#1c2438;
		font-weight:bold;
	}
	.icon-name {
		vertical-align: middle;
	}
	i.iconfont.ivu-icon.ivu-icon-ios-cog,
	i.iconfont.ivu-icon.ivu-icon-ios-paper,
	i.iconfont.ivu-icon.ivu-icon-ios-email,
	i.iconfont.ivu-icon.ivu-icon-chatbox-working,
	i.iconfont.ivu-icon.ivu-icon-ios-compose,
	i.iconfont.ivu-icon.ivu-icon-ios-list {
	    vertical-align: middle;
	    margin-rgiht: 4px;
	    margin-right: 4px;
	}
	.sublist-sub {
		color:#80848f;
		padding-left:46px;
	}
</style>


