const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/option-api',
        name: 'OptionApi',
        component: () => import('@/views/OptionApi.vue'),
        meta: {
            title: 'Option API'
        }
    }
]

export default routes

