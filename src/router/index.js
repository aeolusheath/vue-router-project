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
      // require.context("./test", false, /\.test\.js$/);
      component: require('../components/HelloWorld.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: require('../components/Test.vue')
      // component: require.context('@/components/Test.vue')
    }
  ]
})
