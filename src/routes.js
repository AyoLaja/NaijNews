import Nigeria from './components/nigeria/NigeriaHome.vue'
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import USA from './components/usa/UsaHome.vue'
import NaijBusiness from './components/nigeria/NaijBusiness.vue'


export const routes = [
    {
        path: '/',
        component: Nigeria
    },
    {
        path: '/usa',
        component: USA
    },
    {
        path: '/business',
        component: NaijBusiness
    },
]