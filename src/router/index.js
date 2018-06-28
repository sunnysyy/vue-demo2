import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/part1/layout',
      component: (resolve) => require(['@/page/home.vue'], resolve),
      children: [
        {
          path: '/part1/layout',
          name: 'layout',
          component: (resolve) => require(['@/page/part1/layout.vue'], resolve)
        },
        {
          path: '/part1/table',
          name: 'table',
          component: (resolve) => require(['@/page/part1/table.vue'], resolve)
        },
        {
          path: '/part2',
          name: 'part2',
          component: (resolve) => require(['@/page/part2.vue'], resolve)
        }
      ]
    }
  ]
})
