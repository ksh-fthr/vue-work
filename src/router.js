import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import About from './views/About.vue'
import SampleBuefy from './views/SampleBuefy.vue'
import LifeCycle from './views/LifeCycle.vue'
import LifeCycle2 from './views/LifeCycle2.vue'
import UserDetail from './views/UserDetail.vue'
import Routing from './views/Routing.vue'

Vue.use(Router)

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/routing',
      name: 'routing',
      component: Routing 
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/sample-buefy',
      name: 'samle-buefy',
      component: SampleBuefy
    },
    {
      path: '/life-cycle',
      name: 'llfe-cycle',
      component: LifeCycle 
    },
    {
      path: '/life-cycle2',
      name: 'llfe-cycle2',
      component: LifeCycle2 
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'user-detail',
      component: UserDetail 
    },
  ]
})
