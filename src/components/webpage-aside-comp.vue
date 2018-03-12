<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
                <MenuItem name="2-1" class="submenu">
                            <router-link to="/webpage" class="left-icon">
                              <Icon type="ios-list" size=16 class="iconfont"></Icon>
                              <span class="right-title">首页Banner管理</span>
                            </router-link>
                </MenuItem>
                <Submenu name="2-2">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
 								          <Icon type="ios-paper" size=16 class="iconfont"></Icon>
						              <span class="right-title">首页产品展示</span>
 							            </span>
                        </div>
                    </template>
                    <MenuItem name="2-2-1" class="submenu">
                      <router-link to="/webpage/shearShow" class="left-icon submenu-sub">共享试用展示</router-link>
                    </MenuItem>
                    <MenuItem name="2-2-2" class="submenu">
                      <router-link to="/webpage/wikiNew" class="left-icon submenu-sub">百科新品展示</router-link>
                      <Badge :count="postingCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="2-2-3" class="submenu">
                      <router-link to="/webpage/couponsPro" class="left-icon submenu-sub">好价产品展示</router-link>
                    </MenuItem>
                    <MenuItem name="2-2-4" class="submenu">
                      <router-link to="/webpage/productComm" class="left-icon submenu-sub">产品社区展示</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="2-3">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
                          <Icon type="images" size=16 class="iconfont"></Icon>
						              <span class="right-title">首页内容管理</span>
 							            </span>
                        </div>
                    </template>
                    <MenuItem name="2-3-1" class="submenu">
                      <router-link to="/webpage/pagePosting" class="left-icon submenu-sub">首页帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-3-2" class="submenu">
                      <router-link to="/webpage/pageMasterpiece" class="left-icon submenu-sub">首页作品列表</router-link>
                      <Badge :count="masterPieceCount" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="2-3-3" class="submenu">
                      <router-link to="/webpage/pageVideo" class="left-icon submenu-sub">首页视频列表</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="2-4">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon checked">
                        		<Icon type="chatbox-working" size=16 class="iconfont"></Icon>
                        		<span class="right-title">首页人物展示管理</span>
                        	</span>
                        </div>
                    </template>
	                    <MenuItem name="2-4-1" class="submenu">
	                      <router-link to="/webpage/pageOfficer" class="left-icon submenu-sub">首席体验官展示</router-link>
	                    </MenuItem>
	                    <MenuItem name="2-4-2" class="submenu">
	                      <router-link to="/webpage/masterLogShow" class="left-icon submenu-sub">达人志展示</router-link>
                          <Badge :count="commentsCount" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="2-4-3" class="submenu">
	                      <router-link to="/webpage/masterShow" class="left-icon submenu-sub">社区达人展示</router-link>
	                    </MenuItem>
                </Submenu>
                <MenuItem name="2-5" class="submenu">
                            <router-link to="/webpage/pageCommShow" class="left-icon">
                              <Icon type="ios-list" size=16 class="iconfont"></Icon>
                              <span class="right-title">首页社区展示管理</span>
                            </router-link>
                </MenuItem>
                <MenuItem name="2-6" class="submenu">
                            <router-link to="/webpage/pageAD" class="left-icon">
                              <Icon type="ios-list" size=16 class="iconfont"></Icon>
                              <span class="right-title">首页广告管理</span>
                            </router-link>
                </MenuItem>
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


