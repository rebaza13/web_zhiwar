/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path:'/',
      alias: '/home',
      component: ()=> import("../pages/index.vue"),
      children: [
        {
          path:'/products',
          component: ()=> import("../pages/table/Products.vue")
        },
        {
          path:'/users',
          component: ()=> import("../pages/table/Table.vue")
        }
      ]
    },
    {
      path:'/register',
      alias: '/register',
      component: ()=> import("../pages/auth/Register.vue")
    },
    {
      path:'/login',
      component: ()=> import("../pages/auth/Login.vue")
    },
    {
      path:'/profile',
      component: ()=> import("../pages/profile/Profile.vue")
    },
    
  ]
})

export default router
