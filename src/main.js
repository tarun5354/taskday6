import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createRouter,createWebHistory} from 'vue-router';
import Home from './Views/Home.vue';
import About from './Views/About.vue';
import Movies from './Views/Movies.vue';


const routes=[
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/movies", component: Movies},
];
const router= createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router).mount('#app')
