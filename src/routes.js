import Nigeria from './components/nigeria/NigeriaHome.vue'
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import USA from './components/usa/UsaHome.vue'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/nigeria',
        component: Nigeria
    },
    {
        path: '/usa',
        component: USA
    }
]