<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="lists-box">
                <Submenu name="indexposting">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="list-icon">
 								          <Icon type="ios-paper" size=16 class="iconfont"></Icon>
						              <span class="icon-name">品类社区首页管理</span>
 							            </span>
                        </div>
                    </template>
                    <MenuItem name="1-1" class="sublist">
                      <router-link to="/community_types" class="list-icon sublist-sub">首页帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-2" class="sublist">
                      <router-link to="/community_types/indexWork" class="list-icon sublist-sub">首页作品列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-3" class="sublist">
                      <router-link to="/community_types/indexQuestion" class="list-icon sublist-sub">首页问题列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-4" class="sublist">
                      <router-link to="/community_types/indexPrice" class="list-icon sublist-sub">首页好价列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-5" class="sublist">
                      <router-link to="/community_types/indexSencond" class="list-icon sublist-sub">首页二手列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-6" class="sublist">
                      <router-link to="/community_types/indexQs" class="list-icon sublist-sub">首页装备秀列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-7" class="sublist">
                      <router-link to="/community_types/indexDisclose" class="list-icon sublist-sub">首页爆料列表</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="postingtypes">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="list-icon">
                          <Icon type="images" size=16 class="iconfont"></Icon>
						              <span class="icon-name">品类社区内容管理</span>
 							            </span>
                        </div>
                    </template>
                     <MenuItem name="2-1" class="sublist">
                      <router-link to="/community_types/postingTypes" class="list-icon sublist-sub">帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-2" class="sublist">
                      <router-link to="/community_types/workTypes" class="list-icon sublist-sub">作品列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-3" class="sublist">
                      <router-link to="/community_types/questionTypes" class="list-icon sublist-sub">问题列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-4" class="sublist">
                      <router-link to="/community_types/prieTypes" class="list-icon sublist-sub">好价列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-5" class="sublist">
                      <router-link to="/community_types/sencondTypes" class="list-icon sublist-sub">二手列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-6" class="sublist">
                      <router-link to="/community_types/qsTypes" class="list-icon sublist-sub">装备秀列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-7" class="sublist">
                      <router-link to="/community_types/discloseTypes" class="list-icon sublist-sub">爆料</router-link>
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
	i.iconfont.ivu-icon.ivu-icon-social-bitcoin,
  i.iconfont.ivu-icon.ivu-icon-ios-paper,
	i.iconfont.ivu-icon.ivu-icon-ios-email,
	i.iconfont.ivu-icon.ivu-icon-chatbubble-working,
	i.iconfont.ivu-icon.ivu-icon-chatbox-working,
	i.iconfont.ivu-icon.ivu-icon-ios-compose,
  i.iconfont.ivu-icon.ivu-icon-images,
  i.iconfont.ivu-icon.ivu-icon-camera,
  i.iconfont.ivu-icon.ivu-icon-speakerphone,
  i.iconfont.ivu-icon.ivu-icon-ios-box,
  i.iconfont.ivu-icon.ivu-icon-help-circled,
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


