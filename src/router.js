import { lazy } from 'react'

// isDevMenu=true只在开发环境显示
const router = [
    {
        title: '首页',
        icon: 'home',
        className: 'm-sidebar-home',
        isVisible: true,
        path: '/sale/index/home',
        component: lazy(() => import('../../views/light/index/home/Home'))
    },
    {
        title: 'xx管理',
        icon: 'base',
        isVisible: true,
        key: '/sale/index/offline',
        children: [
            {
                title: 'xx管理',
                icon: '',
                isVisible: true,
                path: '/sale/index/offline/companyList',
                component: lazy(() => import('../../views/sale/index/offline/companyList/Index'))
            },
            {
                title: 'xx管理',
                icon: '',
                isVisible: true,
                path: '/sale/index/offline/shopList',
                component: lazy(() => import('../../views/sale/index/offline/shopList/Index'))
            },
        ]
    },
]


export default router