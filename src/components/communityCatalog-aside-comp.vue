<template>
	<div class="aside-box">
    <Select v-model="community_id" class="catalog-position">
        <Option v-for="item in catalog" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>
		 <Menu :theme="theme" class="menu-wrapper" style="padding-top:60px">
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
                      <router-link to="/community_catalog" class="left-icon submenu-sub">首页帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-2" class="submenu">
                      <router-link to="/community_catalog/indexWork" class="left-icon submenu-sub">首页作品列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-3" class="submenu">
                      <router-link to="/community_catalog/indexQuestion" class="left-icon submenu-sub">首页问题列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-4" class="submenu">
                      <router-link to="/community_catalog/indexPrice" class="left-icon submenu-sub">首页好价列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-5" class="submenu">
                      <router-link to="/community_catalog/indexSencond" class="left-icon submenu-sub">首页二手列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-6" class="submenu">
                      <router-link to="/community_catalog/indexQs" class="left-icon submenu-sub">首页装备秀列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-7" class="submenu">
                      <router-link to="/community_catalog/indexDisclose" class="left-icon submenu-sub">首页爆料列表</router-link>
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
                      <router-link to="/community_catalog/postingTypes" class="left-icon submenu-sub">帖子列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-2" class="submenu">
                      <router-link to="/community_catalog/workTypes" class="left-icon submenu-sub">作品列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-3" class="submenu">
                      <router-link to="/community_catalog/questionTypes" class="left-icon submenu-sub">问题列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-4" class="submenu">
                      <router-link to="/community_catalog/prieTypes" class="left-icon submenu-sub">好价列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-5" class="submenu">
                      <router-link to="/community_catalog/sencondTypes" class="left-icon submenu-sub">二手列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-6" class="submenu">
                      <router-link to="/community_catalog/qsTypes" class="left-icon submenu-sub">装备秀列表</router-link>
                    </MenuItem>
                    <MenuItem name="2-7" class="submenu">
                      <router-link to="/community_catalog/discloseTypes" class="left-icon submenu-sub">爆料</router-link>
                    </MenuItem>
                </Submenu>
                
            </Menu>

            <div class="viewer">
            	<router-view></router-view>
            </div>
	</div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex'
	export default {
       data() {
       	return {
       		theme: "light"
       	}
       },

       computed: {
        ...mapGetters('catalogCommunityData', [
              'catalog',
              'community_id'
          ])
       },

       created() {
        this.getCatalogs()
       },



       methods: {
        ...mapActions('catalogCommunityData', [
              'getCatalogs'
          ]),

        ...mapMutations('catalogCommunityData', [
             
          ])
       }
	}
</script>

<style scoped>
   .catalog-position{
      width:180px;
      position: absolute;
      top:20px;
      left:28px;
      z-index:1000;
   }
</style>


