<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
		 	    <MenuItem name="wikilist" class="submenu">
                   	 <router-link class="left-icon list-avator" to="/wiki" style="color:#2b85e4">
          						<Icon type="android-people" size=16 class="iconfont"></Icon>
          						<span class="right-title">产品列表管理</span>
          					 </router-link> 
	            </MenuItem>
                <Submenu name="paras">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
 								<Icon type="ios-cog" size=16 class="iconfont"></Icon>
 								<span class="right-title">产品参数管理</span>
 							</span>
                        </div>
                    </template>
                    <MenuItem name="1-1" class="submenu">
                      <router-link to="/wiki/product_module" class="left-icon submenu-sub">产品模板管理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-2" class="submenu">
                      <router-link to="/wiki/params_choice" class="left-icon submenu-sub">高级参数筛选管理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-3" class="submenu">
                      <router-link to="/wiki/list_params" class="left-icon submenu-sub">列表参数管理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-4" class="submenu">
                      <router-link to="/wiki/catalog_price" class="left-icon submenu-sub">品类价格区间管理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="pagesf">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon checked">
                        		<Icon type="filing" size=16 class="iconfont"></Icon>
                        		<span class="right-title">百科首页管理</span>
                        	</span>
                        </div>
                    </template>
	                    <MenuItem name="3-1" class="submenu">
	                      <router-link to="/wiki/front_video" class="left-icon submenu-sub">首页视频管理</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-2" class="submenu">
	                      <router-link to="/wiki/front_recommend" class="left-icon submenu-sub">首页推荐管理</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
                </Submenu>
                <Submenu name="brandsf">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                          <span class="left-icon checked">
                            <Icon type="filing" size=16 class="iconfont"></Icon>
                            <span class="right-title">品类、品牌管理</span>
                          </span>
                        </div>
                    </template>
                      <MenuItem name="4-1" class="submenu">
                        <router-link to="/wiki/catalog" class="left-icon submenu-sub">百科品类管理</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
                      </MenuItem>
                      <MenuItem name="4-2" class="submenu">
                        <router-link to="/wiki/brand" class="left-icon submenu-sub">百科品牌管理</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
                      </MenuItem>
                </Submenu>
                <MenuItem name="pv" class="submenu">
                	<router-link to="/wiki/product_video" class="left-icon editor" >
                		<Icon type="ios-compose" size=16 class="iconfont"></Icon>
                		<span class="right-title">产品视频管理</span>
                	</router-link>
	            </MenuItem>
                <MenuItem name="subline" class="submenu">
                	<router-link to="/wiki/sub_line" class="left-icon logs" >
                		<Icon type="ios-list" size=16 class="iconfont"></Icon>
                		<span class="right-title">线下渠道管理</span>
                	</router-link>
	            </MenuItem>
              <MenuItem name="cp" class="submenu">
                  <router-link to="/wiki/product_recommend" class="left-icon logs" >
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




