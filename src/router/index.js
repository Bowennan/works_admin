import Vue from 'vue'
import Router from 'vue-router'

import UserManagement from '@/components/usersmanage/um-comp'
import NewUserToBeTreated from '@/components/tobetreated/nutbt-comp'
import TaggedUsers from '@/components/tobetreated/tagged-comp'
import AbnormalUsers from '@/components/tobetreated/abnormal-comp'
import SendMessage from '@/components/sendmessage/send-comp'
import ReName from '@/components/useridentityaudit/rename-comp'
import Media from '@/components/useridentityaudit/media-comp'
import ExperienceOfficer from '@/components/useridentityaudit/experience-officer-comp'
import BrandOfficer from '@/components/useridentityaudit/brand-officer-comp'
import Master from '@/components/useridentityaudit/master-comp'
import Community from '@/components/useridentityaudit/community-comp'
import BestKit from '@/components/useridentityaudit/bestkit-comp'
import TemplateEditing from '@/components/templateediting/template-comp'
import Logs from '@/components/logs/logs-comp'

import PostingList from '@/components/community/posting-comp'
import ToBeCheckedPostings from '@/components/community/tbcp-comp'
import AbnormalPostings from '@/components/community/ap-comp'
import CommentsList from '@/components/community/cl-comp'
import ToBeCheckedComment from '@/components/community/tbcc-comp'
import AbnormalComment from '@/components/community/ac-comp'
import AnswerList from '@/components/community/al-comp'
import ToBeAnswer from '@/components/community/tbca-comp'
import AbnormalAnswer from '@/components/community/aa-comp'
import OpusList from '@/components/community/opus-comp'
import ToBeOpus from '@/components/community/tbco-comp'
import AbnormalOpus from '@/components/community/ao-comp'
import AskList from '@/components/community/asking-comp'
import ToBeAsk from '@/components/community/tbcask-comp'
import AbnormalAsk from '@/components/community/aask-comp'
import PriceList from '@/components/community/price-comp'
import ToBePrice from '@/components/community/tbcgp-comp'
import AbnormalPrice from '@/components/community/agp-comp'
import SenHandList from '@/components/community/senhand-comp'
import ToBeSenHand from '@/components/community/tbcsh-comp'
import AbnormalSenHand from '@/components/community/ash-comp'
import disCloList from '@/components/community/disclo-comp'
import ToBedisClo from '@/components/community/tbcdisclo-comp'
import AbnormaldisClo from '@/components/community/adisclo-comp'
import qsList from '@/components/community/qs-comp'
import ToBeqs from '@/components/community/tbcqs-comp'
import Abnormalqs from '@/components/community/aqs-comp'

import BannerList from '@/components/community/common-m/banner-comp'
import ProductsList from '@/components/community/common-m/products-comp'
import BulletinList from '@/components/community/common-m/bulletin-comp'
import RecommendList from '@/components/community/common-m/recommend-comp'

import FrontPagePostingList from '@/components/community/community-f/fpp-comp'
import FrontPageQuestionList from '@/components/community/community-f/fpq-comp'
import FrontPagePriceList from '@/components/community/community-f/fpgp-comp'
import FrontPageSencondHandList from '@/components/community/community-f/fpsh-comp'

import indexPostingList from '@/components/community/community-t/indexpl-comp'
import indexWorkList from '@/components/community/community-t/indexwl-comp'
import indexQuestionList from '@/components/community/community-t/indexql-comp'
import indexPriceList from '@/components/community/community-t/indexprl-comp'
import indexSencondList from '@/components/community/community-t/indexsl-comp'
import indexQsList from '@/components/community/community-t/indexqsl-comp'
import indexDiscloseList from '@/components/community/community-t/indexdcl-comp'

import postingTypes from '@/components/community/community-t/indexpll-comp'
import workTypes from '@/components/community/community-t/indexwll-comp'
import questionTypes from '@/components/community/community-t/indexqll-comp'
import prieTypes from '@/components/community/community-t/indexprll-comp'
import sencondTypes from '@/components/community/community-t/indexsll-comp'
import qsTypes from '@/components/community/community-t/indexqsll-comp'
import discloseTypes from '@/components/community/community-t/indexdcll-comp'

import indexPostingListb from '@/components/community/community-b/indexpl-comp'
import indexQuestionListb from '@/components/community/community-b/indexql-comp'
import indexPriceListb from '@/components/community/community-b/indexprl-comp'
import indexSencondListb from '@/components/community/community-b/indexsl-comp'
import indexDiscloseListb from '@/components/community/community-b/indexdcl-comp'

import postingTypesb from '@/components/community/community-b/indexpll-comp'
import questionTypesb from '@/components/community/community-b/indexqll-comp'
import prieTypesb from '@/components/community/community-b/indexprll-comp'
import sencondTypesb from '@/components/community/community-b/indexsll-comp'
import discloseTypesb from '@/components/community/community-b/indexdcll-comp'

import postingTypesp from '@/components/community/community-p/indexpll-comp'
import questionTypesp from '@/components/community/community-p/indexqll-comp'
import prieTypesp from '@/components/community/community-p/indexprll-comp'
import sencondTypesp from '@/components/community/community-p/indexsll-comp'
import qsTypesp from '@/components/community/community-p/indexqsll-comp'
import discloseTypesp from '@/components/community/community-p/indexdcll-comp'

import wikiProductList from '@/components/wiki/wkpl-comp'
//百科下面的跳转页面
import pspList from '@/components/wiki/sub/psp-comp'
import psaskingList from '@/components/wiki/sub/psasking-comp'
import pcplList from '@/components/wiki/sub/pcpl-comp'
import pcolList from '@/components/wiki/sub/pcol-comp'
import pcshList from '@/components/wiki/sub/pcsh-comp'
import pcclList from '@/components/wiki/sub/pccl-comp'
import pcgpList from '@/components/wiki/sub/pcgp-comp'
import pcqsList from '@/components/wiki/sub/pcqs-comp'
import pcdiscloseList from '@/components/wiki/sub/pcdisclose-comp'
import pbaList from '@/components/wiki/sub/pba-comp'
import onLineList from '@/components/wiki/sub/onlinelist-comp'
import subLineList from '@/components/wiki/sub/sublinelist-comp'


import ptmList from '@/components/wiki/ptm-comp'
import hlpsList from '@/components/wiki/hlps-comp'
import lpmList from '@/components/wiki/lpm-comp'
import pimList from '@/components/wiki/pim-comp'
import hpvmList from '@/components/wiki/hpvm-comp'
import hpcmList from '@/components/wiki/hpcm-comp'
import wktmList from '@/components/wiki/wktm-comp'
import wkbmList from '@/components/wiki/wkbm-comp'
import pvmList from '@/components/wiki/pvm-comp'
import sublmList from '@/components/wiki/sublm-comp'
import pccList from '@/components/wiki/pcc-comp'

import masterLog from '@/components/master/master-log-comp'
import masterList from '@/components/master/master-lists-comp'
import masterOrder from '@/components/master/master-order-comp'

import tagKeyword from '@/components/tag/tag-keyword-comp'
import tagAbout from '@/components/tag/tag-about-comp'
import tagSpecail from '@/components/tag/tag-specail-comp'

import operateAuthority from '@/components/operate/operate-authority-comp'
import operateBackstage from '@/components/operate/operate-backstage-comp'

import contentTipOff from '@/components/abnormal/abnormal-content-comp'
import commentTipOff from '@/components/abnormal/abnormal-comment-comp'
import scoreAbnormal from '@/components/abnormal/abnormal-score-comp'
import actionAbnormal from '@/components/abnormal/abnormal-action-comp'

import pageBanner from '@/components/webpage/pageBanner-comp'
import shearShow from '@/components/webpage/shearShow-comp'
import wikiNew from '@/components/webpage/wikiNew-comp'
import couponsPro from '@/components/webpage/couponsPro-comp'
import productComm from '@/components/webpage/productComm-comp'
import pagePosting from '@/components/webpage/pagePosting-comp'
import pageMasterpiece from '@/components/webpage/pageMasterpiece-comp'
import pageVideo from '@/components/webpage/pageVideo-comp'
import pageOfficer from '@/components/webpage/pageOfficer-comp'
import masterLogShow from '@/components/webpage/masterLogShow-comp'
import masterShow from '@/components/webpage/masterShow-comp'
import pageCommShow from '@/components/webpage/pageCommShow-comp'
import pageAD from '@/components/webpage/pageAD-comp'

import dataBoard from '@/components/datas/datas-board-comp'

import catalogCommunity from  '@/components/communitymanager/catalog-comp'
import brandCommunity  from '@/components/communitymanager/brand-comp'
import productCommunity from  '@/components/communitymanager/product-comp'

import userAside from '@/components/user-aside-comp'
import communityContentAside from '@/components/communityContent-aside-comp'
import communityModuleAside from '@/components/communityModule-aside-comp'
import communityFrontpageAside from '@/components/communityFrontpage-aside-comp'
import communityCatalogAside from '@/components/communityCatalog-aside-comp'
import communityBrandAside from '@/components/communityBrand-aside-comp'
import communityProduct from '@/components/communityProduct-aside-comp'
import wikiProductLists from '@/components/wikiProductLists-aside-comp'
import masterAside from '@/components/master-aside-comp'
import tagAside from '@/components/tag-aside-comp'
import operateAside from '@/components/operate-aside-comp'
import abnormalAside from '@/components/abnormal-aside-comp'
import webpageAside from '@/components/webpage-aside-comp'
import datasAside from '@/components/datas-aside-comp'
import communityAside from '@/components/community-aside-comp'

import asideComp081 from '@/components/aside081-comp'
import asideComp082 from '@/components/aside082-comp'
import asideComp083 from '@/components/aside083-comp'


Vue.use(Router)

export default new Router({
  routes: [
     {
     	path: '/datas',
     	component: datasAside,
        children: [
             {
                path:'',
                component: dataBoard
             },
             {
                path:'content_data',
                component: dataBoard
             },
             {
                path:'community_data',
                component: dataBoard
             },
             {
                path:'wiki_data',
                component: dataBoard
             },
             {
                path:'lab_data',
                component: dataBoard
             },
             {
                path:'abnormal_data',
                component: dataBoard
             }
        ]
     },
     {
     	path: '/user_manager',
     	component: userAside,
        children: [
             {
                path: '',
                component: UserManagement
             },
             {
                path:'nutbt',
                component: NewUserToBeTreated
             },
             {
                path:'tagged',
                component: TaggedUsers
             },
             {
                path:'abnormal',
                component: AbnormalUsers
             },
             {
                path:'sendmessage',
                component: SendMessage
             },
             {
                path:'rename',
                component: ReName
             },
             {
                path:'media',
                component: Media
             },
             {
                path:'eo',
                component: ExperienceOfficer
             },
             {
                path:'bo',
                component: BrandOfficer
             },
             {
                path:'master',
                component: Master
             },
             {
                path: 'community',
                component: Community
             },
             {
                path: 'bestkit',
                component: BestKit
             },
              {
                path: 'template',
                component: TemplateEditing
             },
              {
                path: 'logs',
                component: Logs
             }
      ]
     },
     {
        path: '/community_common',
        component: communityContentAside,
         children: [
             {
                path: '',
                name:'posting',
                component: PostingList
             },
             {
                path:'tbcp',
                component: ToBeCheckedPostings
             },
             {
                path:'ap',
                name:'aposting',
                component: AbnormalPostings
             },
             {
                path:'cl',
                name:'comment',
                component: CommentsList
             },
             {
                path:'tbcc',
                component: ToBeCheckedComment
             },
             {
                path:'ac',
                name:'acomment',
                component: AbnormalComment
             },
             {
                path:'al',
                name: 'reply',
                component: AnswerList
             },
             {
                path:'tbca',
                component: ToBeAnswer
             },
             {
                path:'aa',
                name: 'areply',
                component: AbnormalAnswer
             },
             {
                path:'opus',
                name: 'coupons',
                component: OpusList
             },
             {
                path:'tbco',
                component: ToBeOpus
             },
             {
                path:'ao',
                name:'acoupons',
                component: AbnormalOpus
             },
             {
                path:'ask',
                component: AskList
             },
             {
                path:'tbcask',
                component: ToBeAsk
             },
             {
                path:'aask',
                component: AbnormalAsk
             },
             {
                path:'price',
                component: PriceList
             },
             {
                path:'tbcgp',
                component: ToBePrice
             },
             {
                path:'agp',
                component: AbnormalPrice
             },
             {
                path:'senhand',
                component: SenHandList
             },
             {
                path:'tbcsh',
                component: ToBeSenHand
             },
             {
                path:'ash',
                component: AbnormalSenHand
             },
             {
                path:'disclo',
                component: disCloList
             },
             {
                path:'tbcdisclo',
                component: ToBedisClo
             },
             {
                path:'adisclo',
                component: AbnormaldisClo
             },
             {
                path:'qs',
                component: qsList
             },
             {
                path:'tbcqs',
                component: ToBeqs
             },
             {
                path:'aqs',
                component: Abnormalqs
             }
      ]
     },
     {
        path: '/community_module',
        component: communityModuleAside,
         children: [
             {
                path: '',
                component: BannerList
             },
             {
                path:'products',
                component: ProductsList
             },
             {
                path:'bulletin',
                component: BulletinList
             },
             {
                path:'recommend',
                component: RecommendList
             }
      ]
     },
          {
        path: '/community_frontPage',
        component: communityFrontpageAside,
         children: [
             {
                path: '',
                component: FrontPagePostingList
             },
             {
                path:'questions',
                component: FrontPageQuestionList
             },
             {
                path:'discount',
                component: FrontPagePriceList
             },
             {
                path:'sencondhand',
                component: FrontPageSencondHandList
             }
      ]
     },
     {
        path: '/community_catalog',
        component: communityCatalogAside,
         children: [
             {
                path: '',
                component: indexPostingList
             },
             {
                path:'indexWork',
                component: indexWorkList
             },
             {
                path:'indexQuestion',
                component: indexQuestionList
             },
             {
                path:'indexPrice',
                component: indexPriceList
             },
             {
                path:'indexSencond',
                component: indexSencondList
             },
             {
                path:'indexQs',
                component: indexQsList
             },
             {
                path:'indexDisclose',
                component: indexDiscloseList
             },
             {
                path:'postingTypes',
                component: postingTypes
             },
             {
                path:'workTypes',
                component: workTypes
             },
             {
                path:'questionTypes',
                component: questionTypes
             },
             {
                path:'prieTypes',
                component: prieTypes
             },
             {
                path:'sencondTypes',
                component: sencondTypes
             },
             {
                path:'qsTypes',
                component: qsTypes
             },
             {
                path:'discloseTypes',
                component: discloseTypes
             }
      ]
     },
     {
        path: '/community_brand',
        component: communityBrandAside,
         children: [
             {
                path: '',
                component: indexPostingListb
             },
             {
                path:'indexQuestion',
                component: indexQuestionListb
             },
             {
                path:'indexPrice',
                component: indexPriceListb
             },
             {
                path:'indexSencond',
                component: indexSencondListb
             },
             {
                path:'indexDisclose',
                component: indexDiscloseListb
             },
             {
                path:'postingTypes',
                component: postingTypesb
             },
             {
                path:'questionTypes',
                component: questionTypesb
             },
             {
                path:'prieTypes',
                component: prieTypesb
             },
             {
                path:'sencondTypes',
                component: sencondTypesb
             },
             {
                path:'discloseTypes',
                component: discloseTypesb
             }
      ]
     },
     {
        path:'/community_build',
        component: communityAside,
        children: [
              {
                path:'',
                component:catalogCommunity
              },
              {
                path:'brand',
                component: brandCommunity
              },
              {
                path:'product',
                component:productCommunity
              }
        ]
     },
     {
        path: '/community_product',
        component: communityProduct,
         children: [
             {
                path:'',
                component: postingTypesp
             },
             {
                path:'questionTypes',
                component: questionTypesp
             },
             {
                path:'prieTypes',
                component: prieTypesp
             },
             {
                path:'sencondTypes',
                component: sencondTypesp
             },
             {
                path:'qsTypes',
                component: qsTypesp
             },
             {
                path:'discloseTypes',
                component: discloseTypesp
             }
      ]
     },
     {
        path: '/wiki',
        component: wikiProductLists,
        children: [
             {
                path: '',
                component: wikiProductList
             },
             {
                path:'product_module',
                component:ptmList
             },
             {
                path:'params_choice',
                component: hlpsList
             },
             {
                path:'list_params',
                component: lpmList
             },
             {
                path:'catalog_price',
                component: pimList
             },
             {
                path:'front_video',
                component: hpvmList
             },
             {
                path:'front_recommend',
                component: hpcmList
             },
             {
                path: 'catalog',
                component: wktmList
             },
             {
                path: 'brand',
                component: wkbmList
             },
             {
                path:'product_video',
                component: pvmList
             },
             {
                path: 'sub_line',
                component: sublmList
             },
             {
                path: 'product_recommend',
                component: pccList
             } 
      ]
     },
     {
        path: '/masters',
        component: masterAside,
        children: [
            {
                path:'',
                component:masterLog
            },
            {
                path:'master_list',
                component: masterList
            },
            {
                path: 'master_order',
                component: masterOrder
            }
        ]
     },
     {
        path: '/tag',
        component: tagAside,
        children: [
             {
                path: '',
                component: tagKeyword
             },
             {
                path: 'tag_about',
                component: tagAbout
             },
             {
                path: 'tag_special',
                component: tagSpecail
             }
        ]
     },
     {
        path: '/operate',
        component: operateAside,
        children: [
           {
            path:'',
            component: operateAuthority
           },
           {
            path:'backstage',
            component: operateBackstage
           }
        ]
     },
     {
        path: '/webpage',
        component: webpageAside,
        children: [

               {
                path:'',
                component: pageBanner
               },
               {
                path:'shearShow',
                component: shearShow
               },
               {
                path:'wikiNew',
                component: wikiNew
               },
               {
                path:'couponsPro',
                component: couponsPro
               },
               {
                path:'productComm',
                component: productComm
               },
               {
                path:'pagePosting',
                component: pagePosting
               },
               {
                path:'pageMasterpiece',
                component: pageMasterpiece
               },
               {
                path:'pageVideo',
                component: pageVideo
               },
               {
                path:'pageOfficer',
                component: pageOfficer
               },
               {
                path:'masterLogShow',
                component: masterLogShow
               },
               {
                path:'masterShow',
                component: masterShow
               },
               {
                path: 'pageCommShow',
                component: pageCommShow
               },
               {
                path:'pageAD',
                component: pageAD
               }
        ]
     },
     {
        path: '/abnormal',
        component: abnormalAside,
        children: [
           {
            path:'',
            component: contentTipOff
           },
           {
            path:'comment_tipoff',
            component: commentTipOff
           },
           {
            path:'score_abnormal',
            component: scoreAbnormal
           },
           {
            path: 'action_abnormal',
            component: actionAbnormal
           }
        ]
     },
     {
        path: '/connect_contents',
        component: asideComp081,
        children: [
            {
                path:'',
                component: pspList
            },
            {
                path:'psasking',
                component: psaskingList
            },
            {
                path:'pcpl',
                component: pcplList
            },
            {
                path: 'pcol',
                component: pcolList
            },
            {
                path: 'pcsh',
                component: pcshList
            },
            {
                path: 'pccl',
                component: pcclList
            },
            {
                path: 'pcgp',
                component: pcgpList
            },
            {
                path: 'pcqs',
                component: pcqsList
            },
            {
                path: 'pcdisclose',
                component: pcdiscloseList
            }
        ]
     },
     {
        path: '/connect_persons',
        component: asideComp082,
        children: [
            {
                path: '',
                component: pbaList
            }
        ]
     },
     {
        path: '/manage_ways',
        component: asideComp083,
        children: [
            {
                path: '',
                component: onLineList
            },
            {
                path: 'sublist',
                component: subLineList
            }
        ]
     }
  ]
})
