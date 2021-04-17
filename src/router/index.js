import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import main from '../views/main/index'
import login from '../views/login/index'
import brand from '../views/brand/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: main,
        children: [
            {
                path: '/brand',
                name: 'brand',
                component: brand
            },
            {
                path: '/login',
                name: 'login',
                component: login
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },

    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
