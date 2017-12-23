<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
                <Submenu name="postingtypes">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
                          <Icon type="images" size=16 class="iconfont"></Icon>
						              <span class="right-title">产品社区内容管理</span>
 							            </span>
                        </div>
                    </template>
                     <MenuItem name="2-1" class="submenu">
                      <router-link to="/community_products" class="left-icon submenu-sub">帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-3" class="submenu">
                      <router-link to="/community_products/questionTypes" class="left-icon submenu-sub">问题列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-4" class="submenu">
                      <router-link to="/community_products/prieTypes" class="left-icon submenu-sub">好价列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-5" class="submenu">
                      <router-link to="/community_products/sencondTypes" class="left-icon submenu-sub">二手列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-6" class="submenu">
                      <router-link to="/community_products/qsTypes" class="left-icon submenu-sub">装备秀列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-7" class="submenu">
                      <router-link to="/community_products/discloseTypes" class="left-icon submenu-sub">爆料</router-link>
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


