import Home from './views/Home.vue';
import Contact from './views/Contact.vue';


const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/contact', component: Contact }
]

export default routes;