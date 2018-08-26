import Nigeria from './components/nigeria/NigeriaHome.vue'
// import NavBar from './components/NavBar.vue'
// import Home from './components/Home.vue'
import USA from './components/usa/UsaHome.vue'
import NaijBusiness from './components/nigeria/NaijBusiness.vue'
import NaijHealth from './components/nigeria/NaijHealth.vue'
import NaijTech from './components/nigeria/NaijTech.vue'
import NaijScience from './components/nigeria/NaijScience.vue'
import NaijEntertainment from './components/nigeria/NaijEntertainment.vue'
import NaijSports from './components/nigeria/NaijSports.vue'

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
    {
        path: '/health',
        component: NaijHealth
    },
    {
        path: '/technology',
        component: NaijTech
    },
    {
        path: '/science',
        component: NaijScience
    },
    {
        path: '/entertainment',
        component: NaijEntertainment
    },
    {
        path: '/sports',
        component: NaijSports
    },
]