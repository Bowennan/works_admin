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
                      <router-link :to="{
                                           name:'posting',
                                           params: {
                                                  path: 'articles'
                                           } }"
                                           class="left-icon submenu-sub">帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-2" class="submenu">
                      <router-link to="/community_common/tbcp" class="left-icon submenu-sub">待审核帖子</router-link>
                      <Badge :count="postingCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-3" class="submenu">
                      <router-link :to="{
                                           name:'aposting',
                                           params: {
                                                  path: 'articles'
                                           } }" 
                                           class="left-icon submenu-sub">异常帖子</router-link>
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
                    <MenuItem name="coupons" class="submenu">
                      <router-link :to="{
                                           name:'coupons',
                                           params: {
                                                  path: 'masterpieces'
                                           }

                      }"  class="left-icon submenu-sub">作品列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-22" class="submenu">
                      <router-link to="/community_common/tbco" class="left-icon submenu-sub">待审核作品</router-link>
                      <Badge :count="masterPieceCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-33" class="submenu">
                      <router-link  :to="{
                                           name:'acoupons',
                                           params: {
                                                  path: 'masterpieces'
                                           }

                      }" class="left-icon submenu-sub">异常作品</router-link>
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
	                      <router-link   :to="{
                                           name:'comment',
                                           params: {
                                                  path: 'comment'
                                           }

                      }" class="left-icon submenu-sub">评论列表</router-link>
	                    </MenuItem>
	                    <MenuItem name="2-2" class="submenu">
	                      <router-link to="/community_common/tbcc" class="left-icon submenu-sub">待审核评论</router-link>
                          <Badge :count="commentsCount" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="2-3" class="submenu">
	                      <router-link  :to="{
                                           name:'acomment',
                                           params: {
                                                  path: 'comment'
                                           }

                      }" class="left-icon submenu-sub">异常评论</router-link>
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
	                      <router-link  :to="{
                                           name:'reply',
                                           params: {
                                                  path: 'reply'
                                           }

                      }" class="left-icon submenu-sub">回答列表</router-link>
	                    </MenuItem>
	                    <MenuItem name="3-2" class="submenu">
	                      <router-link to="/community_common/tbca" class="left-icon submenu-sub">待审核回答</router-link>
                          <Badge :count="replyCount" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-3" class="submenu">
	                      <router-link  :to="{
                                           name:'areply',
                                           params: {
                                                  path: 'reply'
                                           }

                      }" class="left-icon submenu-sub">异常回答</router-link>
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
                      <router-link to="/community_common/ask" class="left-icon submenu-sub">提问列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-222" class="submenu">
                      <router-link to="/community_common/tbcask" class="left-icon submenu-sub">待审核提问</router-link>
                      <Badge :count="questionsCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-333" class="submenu">
                      <router-link to="/community_common/aask" class="left-icon submenu-sub">异常提问</router-link>
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
                      <router-link to="/community_common/price" class="left-icon submenu-sub">好价列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-220" class="submenu">
                      <router-link to="/community_common/tbcgp" class="left-icon submenu-sub">待审核好价</router-link>
                      <Badge :count="couponsCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-330" class="submenu">
                      <router-link to="/community_common/agp" class="left-icon submenu-sub">异常好价</router-link>
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
                      <router-link to="/community_common/senhand" class="left-icon submenu-sub">二手列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-452" class="submenu">
                      <router-link to="/community_common/tbcsh" class="left-icon submenu-sub">待审核二手</router-link>
                      <Badge :count="idlesCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-453" class="submenu">
                      <router-link to="/community_common/ash" class="left-icon submenu-sub">异常二手</router-link>
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
                      <router-link to="/community_common/qs" class="left-icon submenu-sub">装备秀列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-256" class="submenu">
                      <router-link to="/community_common/tbcqs" class="left-icon submenu-sub">待审核装备秀</router-link>
                      <Badge :count="exhibitionsCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-367" class="submenu">
                      <router-link to="/community_common/aqs" class="left-icon submenu-sub">异常装备秀</router-link>
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
                      <router-link to="/community_common/disclo" class="left-icon submenu-sub">爆料列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-299" class="submenu">
                      <router-link to="/community_common/tbcdisclo" class="left-icon submenu-sub">待审核爆料</router-link>
                      <Badge :count="disclosesCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-392" class="submenu">
                      <router-link to="/community_common/adisclo" class="left-icon submenu-sub">异常爆料</router-link>
                    </MenuItem>
                </Submenu>
            </Menu>

            <div class="viewer">
            	<router-view></router-view>
            </div>
	</div>
</template>

<script>
  import {postingCount, 
          masterPieceCount,
          commentsCount,
          replyCount,
          couponsCount,
          idlesCount,
          questionsCount,
          exhibitionsCount,
          disclosesCount
         } from '@/axios/api'
	export default {
       data() {
       	return {
       		theme: "light",
          postingCount: null,
          masterPieceCount: null,
          disclosesCount: null,
          couponsCount: null,
          commentsCount: null,
          idlesCount: null,
          questionsCount: null,
          exhibitionsCount: null,
          replyCount:null
       	}
       },

       created() {
        postingCount().then(res => {
          this.postingCount = res.data.data
        }),
        masterPieceCount().then(res => {
          this.masterPieceCount = res.data.data
        }),
        commentsCount().then(res => {
          this.commentsCount = res.data.data
        }),
        couponsCount().then(res => {
          this.couponsCount = res.data.data
        }),
        idlesCount().then(res => {
          this.idlesCount = res.data.data
        }),
        questionsCount().then(res => {
          this.questionsCount = res.data.data
        }),
        disclosesCount().then(res => {
          this.disclosesCount = res.data.data
        }),
        replyCount().then(res => {
          this.replyCount = res.data.data
        }),
        exhibitionsCount().then(res => {
          this.exhibitionsCount = res.data.data
        })
       }
	}
</script>


