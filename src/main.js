// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import auth from './auth'
import VueResource from 'vue-resource'
import VueProgressBar from 'vue-progressbar'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from './routes'
import vueSmoothScroll from 'vue-smooth-scroll'
import moment from 'moment'
import AppView from './App.vue'

Vue.use(vueSmoothScroll)
Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.use(VeeValidate)
Vue.use(VueResource)
Vue.use(auth)

var router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

var locale = window.navigator.userLanguage || window.navigator.language

Vue.filter('moment', function (date) {
  moment.locale(locale)
  return moment(date).format('D MMM YYYY')
})

Vue.filter('momentAgo', function (date) {
  moment.locale(locale)
  return moment(date).fromNow()
})

Vue.directive('tooltip', function (el, binding) {
  $(el).tooltip({
    title: binding.value,
    placement: binding.arg,
    trigger: 'hover'
  })
})

Vue.use(VueProgressBar, {
  color: '#1F98FF',
  failedColor: 'red',
  height: '2px'
})

Vue.filter('locale', function (value) {
  return Number(value).toLocaleString('en-en')
})

Vue.filter('precise', function (value, length = 2) {
  return value.toFixed(length)
})

router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.forVisitors)) {
    if (!Vue.auth.isAuthenticated()) {
      next({
        // path: '/no-auth',
        // query: { redirect: to.fullPath }
      })
      next()
    } else {
      next()
    }
  } else {
    next()
  }
})

/* globals localStorage */
Vue.http.options.root = process.env.API_URL
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.ftc_token

/* eslint-disable no-new */
new Vue({
  router,
  el: '#root',
  metaInfo: {
    title: 'Scripta55',
    titleTemplate: '%s | scripta55.com',
    meta: {
      description: 'scripta55 boiler plate'
    }
  },
  render: h => h(AppView)
})
