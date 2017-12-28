<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
		 	    <MenuItem name="userlist" class="submenu">
                   	 <router-link class="left-icon list-avator" to="/wiki" style="color:#2b85e4">
          						<Icon type="android-people" size=16 class="iconfont"></Icon>
          						<span class="right-title">产品列表管理</span>
          					 </router-link> 
	            </MenuItem>
                <Submenu name="user">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
 								<Icon type="ios-cog" size=16 class="iconfont"></Icon>
 								<span class="right-title">产品参数管理</span>
 							</span>
                        </div>
                    </template>
                    <MenuItem name="1-1" class="submenu">
                      <router-link to="/wiki/ptm" class="left-icon submenu-sub">产品模板管理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-2" class="submenu">
                      <router-link to="/wiki/hlps" class="left-icon submenu-sub">高级参数筛选管理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-3" class="submenu">
                      <router-link to="/wiki/lpm" class="left-icon submenu-sub">列表参数管理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-3" class="submenu">
                      <router-link to="/wiki/pim" class="left-icon submenu-sub">品类价格区间管理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="check">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon checked">
                        		<Icon type="filing" size=16 class="iconfont"></Icon>
                        		<span class="right-title">百科首页管理</span>
                        	</span>
                        </div>
                    </template>
	                    <MenuItem name="3-1" class="submenu">
	                      <router-link to="/wiki/hpvm" class="left-icon submenu-sub">首页视频管理</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-2" class="submenu">
	                      <router-link to="/wiki/hpcm" class="left-icon submenu-sub">首页推荐管理</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
                </Submenu>
                <Submenu name="check">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                          <span class="left-icon checked">
                            <Icon type="filing" size=16 class="iconfont"></Icon>
                            <span class="right-title">品类、品牌管理</span>
                          </span>
                        </div>
                    </template>
                      <MenuItem name="3-1" class="submenu">
                        <router-link to="/wiki/wktm" class="left-icon submenu-sub">百科品类管理</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
                      </MenuItem>
                      <MenuItem name="3-2" class="submenu">
                        <router-link to="/wiki/wkbm" class="left-icon submenu-sub">百科品牌管理</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
                      </MenuItem>
                </Submenu>
                <MenuItem name="editor" class="submenu">
                	<router-link to="/wiki/pvm" class="left-icon editor" >
                		<Icon type="ios-compose" size=16 class="iconfont"></Icon>
                		<span class="right-title">产品视频管理</span>
                	</router-link>
	            </MenuItem>
                <MenuItem name="logs" class="submenu">
                	<router-link to="/wiki/sublm" class="left-icon logs" >
                		<Icon type="ios-list" size=16 class="iconfont"></Icon>
                		<span class="right-title">线下渠道管理</span>
                	</router-link>
	            </MenuItem>
              <MenuItem name="logs" class="submenu">
                  <router-link to="/wiki/pcc" class="left-icon logs" >
                    <Icon type="ios-list" size=16 class="iconfont"></Icon>
                    <span class="right-title">产品推荐审核</span>
                  </router-link>
              </MenuItem>
            </Menu>

            <div class="viewer">
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

<style>
	/*公共侧边导航样式，见main.js*/
</style>




