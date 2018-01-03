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

import asideComp01 from '@/components/aside01-comp'
import asideComp02 from '@/components/aside02-comp'
import asideComp03 from '@/components/aside03-comp'
import asideComp04 from '@/components/aside04-comp'
import asideComp05 from '@/components/aside05-comp'
import asideComp06 from '@/components/aside06-comp'
import asideComp07 from '@/components/aside07-comp'
import asideComp08 from '@/components/aside08-comp'
import asideComp081 from '@/components/aside081-comp'
import asideComp082 from '@/components/aside082-comp'
import asideComp083 from '@/components/aside083-comp'
import Log4 from '@/components/test03-comp'
import Log5 from '@/components/test04-comp'
import Log6 from '@/components/test05-comp'
import Log7 from '@/components/test06-comp'
import Log8 from '@/components/test07-comp'
import Log9 from '@/components/test08-comp'
import Log1 from '@/components/test01-comp'


Vue.use(Router)

export default new Router({
  routes: [
     {
     	path: '/datas',
     	component: Log1
     },
     {
     	path: '/users',
     	component: asideComp01,
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
        path: '/communities',
        component: asideComp02,
         children: [
             {
                path: '',
                component: PostingList
             },
             {
                path:'tbcp',
                component: ToBeCheckedPostings
             },
             {
                path:'ap',
                component: AbnormalPostings
             },
             {
                path:'cl',
                component: CommentsList
             },
             {
                path:'tbcc',
                component: ToBeCheckedComment
             },
             {
                path:'ac',
                component: AbnormalComment
             },
             {
                path:'al',
                component: AnswerList
             },
             {
                path:'tbca',
                component: ToBeAnswer
             },
             {
                path:'aa',
                component: AbnormalAnswer
             },
             {
                path:'opus',
                component: OpusList
             },
             {
                path:'tbco',
                component: ToBeOpus
             },
             {
                path:'ao',
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
        path: '/community_common_m',
        component: asideComp03,
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
        path: '/community_front_p',
        component: asideComp04,
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
        path: '/community_types',
        component: asideComp05,
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
        path: '/community_brands',
        component: asideComp06,
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
        path: '/community_products',
        component: asideComp07,
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
        component: asideComp08,
        children: [
             {
                path: '',
                component: wikiProductList
             },
             {
                path:'ptm',
                component:ptmList
             },
             {
                path:'hlps',
                component: hlpsList
             },
             {
                path:'lpm',
                component: lpmList
             },
             {
                path:'pim',
                component: pimList
             },
             {
                path:'hpvm',
                component: hpvmList
             },
             {
                path:'hpcm',
                component: hpcmList
             },
             {
                path: 'wktm',
                component: wktmList
             },
             {
                path: 'wkbm',
                component: wkbmList
             },
             {
                path:'pvm',
                component: pvmList
             },
             {
                path: 'sublm',
                component: sublmList
             },
             {
                path: 'pcc',
                component: pccList
             } 
      ]
     },
     {
        path: '/labs',
        component: Log6
     },
     {
        path: '/masters',
        component: Log7
     },
     {
        path: '/seoes',
        component: Log8
     },
     {
        path: '/operators',
        component: Log9
     },
     {
        path: '/connect_contents/:productId',
        name: 'connect_contents',
        component: asideComp081,
        children: [
            {
                path:'',
                component: pspList
            },
            {
                path:'psasking',
                component: psaskingList
            }
        ]
     }
  ]
})
