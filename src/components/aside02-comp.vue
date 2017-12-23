<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
                <Submenu name="posting">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
 								          <Icon type="ios-paper" size=16 class="iconfont"></Icon>
						              <span class="right-title">通用帖子管理</span>
 							            </span>
                        </div>
                    </template>
                    <MenuItem name="1-1" class="submenu">
                      <router-link to="/communities" class="left-icon submenu-sub">帖子列表</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-2" class="submenu">
                      <router-link to="/communities/tbcp" class="left-icon submenu-sub">待审核帖子</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-3" class="submenu">
                      <router-link to="/communities/ap" class="left-icon submenu-sub">异常帖子</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="opus">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
                          <Icon type="images" size=16 class="iconfont"></Icon>
						              <span class="right-title">通用作品管理</span>
 							            </span>
                        </div>
                    </template>
                    <MenuItem name="1-11" class="submenu">
                      <router-link to="/communities/opus" class="left-icon submenu-sub">作品列表</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-22" class="submenu">
                      <router-link to="/communities/tbco" class="left-icon submenu-sub">待审核作品</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-33" class="submenu">
                      <router-link to="/communities/ao" class="left-icon submenu-sub">异常作品</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="comment">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon checked">
                        		<Icon type="chatbox-working" size=16 class="iconfont"></Icon>
                        		<span class="right-title">通用评论管理</span>
                        	</span>
                        </div>
                    </template>
	                    <MenuItem name="2-1" class="submenu">
	                      <router-link to="/communities/cl" class="left-icon submenu-sub">评论列表</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="2-2" class="submenu">
	                      <router-link to="/communities/tbcc" class="left-icon submenu-sub">待审核评论</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="2-3" class="submenu">
	                      <router-link to="/communities/ac" class="left-icon submenu-sub">异常评论</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
                </Submenu>
                <Submenu name="answer">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon checked">
                        		
                        		<Icon type="chatbubble-working" size=16 class="iconfont"></Icon>
                        		<span class="right-title">通用回答管理</span>
                        	</span>
                        </div>
                    </template>
	                    <MenuItem name="3-1" class="submenu">
	                      <router-link to="/communities/al" class="left-icon submenu-sub">回答列表</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-2" class="submenu">
	                      <router-link to="/communities/tbca" class="left-icon submenu-sub">待审核回答</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-3" class="submenu">
	                      <router-link to="/communities/aa" class="left-icon submenu-sub">异常回答</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
                </Submenu>
                <Submenu name="ask">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                          <span class="left-icon">
                          <Icon type="help-circled"  size=16 class="iconfont"></Icon>
                          <span class="right-title">通用提问管理</span>
                          </span>
                        </div>
                    </template>
                    <MenuItem name="1-111" class="submenu">
                      <router-link to="/communities/ask" class="left-icon submenu-sub">提问列表</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-222" class="submenu">
                      <router-link to="/communities/tbcask" class="left-icon submenu-sub">待审核提问</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-333" class="submenu">
                      <router-link to="/communities/aask" class="left-icon submenu-sub">异常提问</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="price">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                          <span class="left-icon">
                          <Icon type="social-bitcoin" size=16 class="iconfont"></Icon>
                          <span class="right-title">通用好价管理</span>
                          </span>
                        </div>
                    </template>
                    <MenuItem name="1-110" class="submenu">
                      <router-link to="/communities/price" class="left-icon submenu-sub">好价列表</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-220" class="submenu">
                      <router-link to="/communities/tbcgp" class="left-icon submenu-sub">待审核好价</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-330" class="submenu">
                      <router-link to="/communities/agp" class="left-icon submenu-sub">异常好价</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="senhand">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                          <span class="left-icon">
                          <Icon type="ios-box" size=16 class="iconfont"></Icon>
                          <span class="right-title">通用二手管理</span>
                          </span>
                        </div>
                    </template>
                    <MenuItem name="1-451" class="submenu">
                      <router-link to="/communities/senhand" class="left-icon submenu-sub">二手列表</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-452" class="submenu">
                      <router-link to="/communities/tbcsh" class="left-icon submenu-sub">待审核二手</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-453" class="submenu">
                      <router-link to="/communities/ash" class="left-icon submenu-sub">异常二手</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="qs">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                          <span class="left-icon">
                          <Icon type="camera" size=16 class="iconfont"></Icon>
                          <span class="right-title">通用装备秀管理</span>
                          </span>
                        </div>
                    </template>
                    <MenuItem name="1-145" class="submenu">
                      <router-link to="/communities/qs" class="left-icon submenu-sub">装备秀列表</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-256" class="submenu">
                      <router-link to="/communities/tbcqs" class="left-icon submenu-sub">待审核装备秀</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-367" class="submenu">
                      <router-link to="/communities/aqs" class="left-icon submenu-sub">异常装备秀</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <Submenu name="disclo">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                          <span class="left-icon">
                          <Icon type="speakerphone" size=16 class="iconfont"></Icon>
                          <span class="right-title">通用爆料管理</span>
                          </span>
                        </div>
                    </template>
                    <MenuItem name="1-189" class="submenu">
                      <router-link to="/communities/disclo" class="left-icon submenu-sub">爆料列表</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-299" class="submenu">
                      <router-link to="/communities/tbcdisclo" class="left-icon submenu-sub">待审核爆料</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-392" class="submenu">
                      <router-link to="/communities/adisclo" class="left-icon submenu-sub">异常爆料</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
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


