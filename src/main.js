// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.config.productionTip = false

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: true })

router.beforeEach((to, from, next) => {
  console.log('start--------------------------------->>>>>>>>>>>')
  NProgress.start()

  next()
})

router.afterEach(() => {
  console.log('end------------------------------------><<<<<<<<<<<<<<')
  NProgress.done()
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
//   data: {
//     eventHub: new Vue()
//   }
// })
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
})
