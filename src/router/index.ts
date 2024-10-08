import { h } from 'vue'
import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: AppView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: defineAsyncComponent(() => import('../views/DataSourceView.vue')),
          children: [
            {
              path: ':id',
              component: defineAsyncComponent(
                () => import('../views/DataSourceContent/DataSourceContent.vue')
              )
            },
            {
              path: '',
              redirect: '/app/dataSource/1'
            }
          ]
        },
        {
          path: 'layout',
          name: 'layout',
          component: defineAsyncComponent(() => import('../views/PageLayoutView.vue'))
        },
        {
          path: 'actions',
          name: 'actions',
          component: defineAsyncComponent(() => import('../views/ActionsView.vue'))
        }
      ]
    },
    {
      path: '/runner',
      name: 'runner',
      component: defineAsyncComponent(() => import('../views/RunnerView.vue'))
    },
    {
      path: '/about',
      name: 'about',
      component: defineAsyncComponent(() => import('../views/AboutView.vue'))
    },
    {
      path: '/',
      redirect: '/app/layout'
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => h('div', '404')
    }
  ]
})

export default router
