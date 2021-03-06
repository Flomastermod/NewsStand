import userStore from '../store/index'

const routes = [{

    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        name: 'Index',
        path: '',
        component: () => import('pages/Index.vue'),
        
      },
      {
        name: "categories",
        path: '/categories/:type',
        component: () => import('pages/Categories.vue'),
       
      },
      {
        name: "search",
        path: "/search/:query",
        component:() => import ('pages/search.vue')
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    component: () => import('layouts/users'),
    children: [{
        path: 'signIn',
        component: () => import('pages/signIn')
      },
      {
        path: 'signUp',
        component: () => import('pages/signUp')
      }
    ]
  }


]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
