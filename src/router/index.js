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
import asideComp from '@/components/aside-comp'
import Log3 from '@/components/test02-comp'
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
     	component: asideComp,
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
        path: '/tips',
        component: Log3
     },
     {
        path: '/communities',
        component: Log4
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
