<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
                <Submenu name="9">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
                          <Icon type="medkit" size=16 class="iconfont"></Icon>
						              <span class="right-title">内容异常监控</span>
 							            </span>
                        </div>
                    </template>
                     <MenuItem name="9-1" class="submenu">
                      <router-link to="/abnormal" class="left-icon submenu-sub">内容举报</router-link><Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="9-2" class="submenu">
                      <router-link to="/abnormal/comment_tipoff" class="left-icon submenu-sub">评论回答举报</router-link><Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <MenuItem name="9-3" class="submenu">
                  <router-link to="/abnormal/score_abnormal" class="left-icon ">
                  <Icon type="ios-information" size=16 class="iconfont"></Icon>
                  <span class="right-title">积分异常监控</span>
                  </router-link><Badge count="10" class="badge-scale"></Badge>
                </MenuItem>

                <MenuItem name="9-4" class="submenu">
                  <router-link to="/abnormal/action_abnormal" class="left-icon ">
                   <Icon type="flash-off" size=16 class="iconfont"></Icon>
                   <span class="right-title">行为异常监控</span>
                  </router-link><Badge count="10" class="badge-scale"></Badge>
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


