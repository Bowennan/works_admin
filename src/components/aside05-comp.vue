<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
                <Submenu name="indexposting">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
 								          <Icon type="ios-paper" size=16 class="iconfont"></Icon>
						              <span class="right-title">品类社区首页管理</span>
 							            </span>
                        </div>
                    </template>
                    <MenuItem name="1-1" class="submenu">
                      <router-link to="/community_types" class="left-icon submenu-sub">首页帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-2" class="submenu">
                      <router-link to="/community_types/indexWork" class="left-icon submenu-sub">首页作品列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-3" class="submenu">
                      <router-link to="/community_types/indexQuestion" class="left-icon submenu-sub">首页问题列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-4" class="submenu">
                      <router-link to="/community_types/indexPrice" class="left-icon submenu-sub">首页好价列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-5" class="submenu">
                      <router-link to="/community_types/indexSencond" class="left-icon submenu-sub">首页二手列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-6" class="submenu">
                      <router-link to="/community_types/indexQs" class="left-icon submenu-sub">首页装备秀列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-7" class="submenu">
                      <router-link to="/community_types/indexDisclose" class="left-icon submenu-sub">首页爆料列表</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="postingtypes">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
                          <Icon type="images" size=16 class="iconfont"></Icon>
						              <span class="right-title">品类社区内容管理</span>
 							            </span>
                        </div>
                    </template>
                     <MenuItem name="2-1" class="submenu">
                      <router-link to="/community_types/postingTypes" class="left-icon submenu-sub">帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-2" class="submenu">
                      <router-link to="/community_types/workTypes" class="left-icon submenu-sub">作品列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-3" class="submenu">
                      <router-link to="/community_types/questionTypes" class="left-icon submenu-sub">问题列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-4" class="submenu">
                      <router-link to="/community_types/prieTypes" class="left-icon submenu-sub">好价列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-5" class="submenu">
                      <router-link to="/community_types/sencondTypes" class="left-icon submenu-sub">二手列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-6" class="submenu">
                      <router-link to="/community_types/qsTypes" class="left-icon submenu-sub">装备秀列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-7" class="submenu">
                      <router-link to="/community_types/discloseTypes" class="left-icon submenu-sub">爆料</router-link>
                    </MenuItem>
                </Submenu>
                
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


