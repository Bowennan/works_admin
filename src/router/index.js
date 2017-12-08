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


Vue.use(Router)

export default new Router({
  routes: [
     {
     	path: '/',
     	component: UserManagement
     },
     {
     	path: '/nutbt',
     	component: NewUserToBeTreated
     },
     {
        path: '/tagged',
        component: TaggedUsers
     },
     {
        path: '/abnormal',
        component: AbnormalUsers
     },
     {
        path: '/sendmessage',
        component: SendMessage
     },
     {
        path: '/rename',
        component: ReName
     },
     {
        path: '/media',
        component: Media
     },
     {
        path: '/eo',
        component: ExperienceOfficer
     },
     {
        path: '/bo',
        component: BrandOfficer
     },
     {
        path: '/master',
        component: Master
     },
     {
        path: '/community',
        component: Community
     },
     {
        path: '/bestkit',
        component: BestKit
     },
      {
        path: '/template',
        component: TemplateEditing
     },
      {
        path: '/logs',
        component: Logs
     }
  ]
})
