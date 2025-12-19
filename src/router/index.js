import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
// 使用 createWebHashHistory的时候url携带参数会出问题，需要手动加#号
// if (typeof window !== 'undefined') {
//     const url = new URL(window.location.href)
//     const hasQuery = url.search && url.search.length > 1
//     const hasHash = url.hash && url.hash.length > 1
    
//     // 如果有查询参数但没有hash，重定向到正确的hash格式
//     if (hasQuery && !hasHash) {
//         const queryString = url.search
//         window.location.replace(`${url.origin}${url.pathname}#/${queryString}`)
//     }
// }
const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 }
    }
})
export default router

