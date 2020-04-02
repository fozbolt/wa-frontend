import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< Updated upstream
import Posts from '../views/Posts.vue'
=======
>>>>>>> Stashed changes

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< Updated upstream
    component: Home,
    children: [
      {
        path: '',
        name: 'posts',
        component: Posts,
      },
      {
        path: 'newpost',
        name: 'newpost',
        component: () => import(/* webpackChunkName: "newpost" */ '../views/NewPost.vue')
      },
      {
        path: 'post/:id',
        props: true,
        name: 'post-detail',
        component: () => import(/* webpackChunkName: "post-detail" */ '../views/PostDetail.vue')
      }
    ]
=======
    component: Home
>>>>>>> Stashed changes
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
