import Vue from 'vue'
import auth from './auth'
import LoginView from './components/views/user/Login.vue'
import RegisterView from './components/views/user/Register.vue'
import NotFoundView from './components/shared/404.vue'
import NoAuth from './components/shared/NoAuth.vue'

// Containers
import UserContainer from './components/containers/User.vue'
import PublicContainer from './components/containers/Public.vue'

// User Views
import IndexuserView from './components/views/user/Index.vue'
import ProfileView from './components/views/user/Profile.vue'

// Public Views
import IndexPublicView from './components/views/public/Index.vue'
import FAQsPublicView from './components/views/public/FAQs.vue'

Vue.use(auth)

const routes = [
  {
    path: '/user/register',
    component: RegisterView,
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/user/login',
    component: LoginView,
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/',
    component: PublicContainer,
    meta: {
      forVisitors: true
    },
    children: [
      {
        path: '',
        alias: 'home-landing',
        component: IndexPublicView,
        name: 'home-landing',
        meta: {description: 'Frequently Asked Questions'}
      },
      {
        path: 'frequently-asked-questions',
        alias: 'faqs',
        component: FAQsPublicView,
        name: 'Frequently Asked Questions',
        meta: {description: 'Frequently Asked Questions'}
      }
    ]
  },
  {
    path: '/user/dashboard',
    component: UserContainer,
    children: [
      {
        path: '',
        component: IndexuserView,
        name: 'landing',
        meta: {description: 'user dashboard'}
      },
      {
        path: 'profile',
        component: ProfileView,
        name: 'Profile',
        meta: {description: 'Profile'}
      }
    ]
  }, {
    // not found handler by path
    path: '/no-auth',
    name: 'no-auth',
    component: NoAuth,
    meta: {
      forVisitors: true
    }
  }, {
    // not found handler by path
    path: 'not-found',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      forVisitors: true
    }
  }, {
    // not found handler
    path: '*',
    component: NotFoundView,
    meta: {
      forVisitors: true
    }
  }
]

export default routes
