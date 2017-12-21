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

import asideComp01 from '@/components/aside01-comp'
import asideComp02 from '@/components/aside02-comp'
import asideComp03 from '@/components/aside03-comp'
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
        path: '/wikis',
        component: Log5
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
     }
  ]
})
