import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: require('../components/HelloWorld.vue').default
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => require(['@/components/Test'], resolve)
    }
  ]
})
