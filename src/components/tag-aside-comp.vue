<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
                <Submenu name="postingtypes">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
                          <Icon type="ios-pricetags" size=16 class="iconfont"></Icon>
						              <span class="right-title">TAG关键词管理</span>
 							            </span>
                        </div>
                    </template>
                     <MenuItem name="8-1" class="submenu">
                      <router-link to="/tag" class="left-icon submenu-sub">TAG关键词库</router-link>
                    </MenuItem>
                    <MenuItem name="8-2" class="submenu">
                      <router-link to="/tag/tag_about" class="left-icon submenu-sub">TAG关联</router-link>
                    </MenuItem>
                </Submenu>
                <MenuItem name="8-3" class="submenu">
                  <router-link to="/tag/tag_special" class="left-icon">
                    <Icon type="ios-list" size=16 class="iconfont"></Icon>
                    <span class="right-title">专题管理</span>
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


