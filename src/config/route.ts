
import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import User from "../pages/UserPage.vue";
import Search from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import ShowProf from "../pages/ShowProf.vue";





// const routes = [
//     { path: '/', component: HomeView },
//     { path: '/about', component: AboutView },
// ]
/**
 * 路由配置
 */
const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User },
    { path: '/search',component: Search},
    { path: '/user/list',component: SearchResultPage},
    { path: '/user/list/showProf',component: ShowProf},
    { path: '/user/edit',component: UserEditPage},
]

export default routes;